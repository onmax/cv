import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import slugify from 'slugify';
import { PROJECTS } from '../src/data/projects-data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const experienceDir = path.resolve(__dirname, '../experience');

const slug = (input: string) =>
  slugify(input, { lower: true, strict: true, remove: /[.]/g });

const escapeYaml = (value: string) =>
  value.replace(/"/g, '\\"');

const formatDate = (value: string | null) => value ?? null;

const formatLinks = (links: { label: string; url: string }[]) =>
  links.reduce<Record<string, string>>((acc, link) => {
    acc[slug(link.label)] = link.url;
    return acc;
  }, {});

const highlightLines = (highlights: { label: string; count: number; examples: string[] }[]) =>
  highlights.map((highlight) => {
    const examples = highlight.examples.filter(Boolean).slice(0, 3);
    return `- **${highlight.label}**: ${highlight.count} updates${examples.length ? ` (examples: ${examples.join('; ')})` : ''}`;
  });

const collaborationLines = (collaboration: Project['collaboration']) => {
  const lines: string[] = [];
  const prStates = Object.entries(collaboration.pullRequests ?? {})
    .filter(([, count]) => count > 0)
    .map(([state, count]) => `${state.toLowerCase()}: ${count}`)
    .join(', ');
  if (prStates) {
    lines.push(`- Pull requests: ${prStates}`);
  }
  const issueStates = Object.entries(collaboration.issues ?? {})
    .filter(([, count]) => count > 0)
    .map(([state, count]) => `${state.toLowerCase()}: ${count}`)
    .join(', ');
  if (issueStates) {
    lines.push(`- Issues: ${issueStates}`);
  }
  const samplePRs = (collaboration.samplePRs ?? []).slice(0, 3);
  if (samplePRs.length) {
    lines.push('- Sample PRs:');
    samplePRs.forEach((pr) => {
      lines.push(`  - ${pr.title} (${pr.state.toLowerCase()}): ${pr.url}`);
    });
  }
  const sampleIssues = (collaboration.sampleIssues ?? []).slice(0, 3);
  if (sampleIssues.length) {
    lines.push('- Sample Issues:');
    sampleIssues.forEach((issue) => {
      lines.push(`  - ${issue.title} (${issue.state.toLowerCase()}): ${issue.url}`);
    });
  }
  return lines;
};

interface Project {
  category: 'personal' | 'nimiq' | 'external';
  owner: string;
  name: string;
  nameWithOwner: string;
  role: string;
  summary: string;
  links: { label: string; url: string }[];
  timeline: { start: string | null; end: string | null; duration: string | null; commitCount: number };
  stack: string[];
  highlights: { label: string; count: number; examples: string[] }[];
  collaboration: {
    pullRequests: Record<string, number>;
    issues: Record<string, number>;
    samplePRs: { title: string; url: string; state: string }[];
    sampleIssues: { title: string; url: string; state: string }[];
  };
  meta: { stars: number | null; license: string | null; createdAt: string | null; updatedAt: string | null };
  impact: string;
}

const main = async () => {
  await fs.mkdir(experienceDir, { recursive: true });

  for (const project of PROJECTS as Project[]) {
    const slugParts = [project.owner, project.name].filter(Boolean).join('-');
    const filename = `${slug(slugParts || project.nameWithOwner)}.md`;
    const filePath = path.join(experienceDir, filename);

    const links = formatLinks(project.links ?? []);

    const frontMatter = {
      title: project.name,
      organization: project.owner,
      role: project.role,
      category: project.category,
      duration: {
        start: formatDate(project.timeline.start),
        end: formatDate(project.timeline.end),
        human: project.timeline.duration,
      },
      commit_count: project.timeline.commitCount,
      tech: project.stack,
      links,
      stars: project.meta.stars,
      license: project.meta.license,
      created_at: project.meta.createdAt,
      updated_at: project.meta.updatedAt,
    };

    const yamlLines = ['---'];
    for (const [key, value] of Object.entries(frontMatter)) {
      if (value === null || value === undefined) continue;
      if (typeof value === 'object' && !Array.isArray(value)) {
        yamlLines.push(`${key}:`);
        for (const [subKey, subValue] of Object.entries(value)) {
          if (subValue === null || subValue === undefined || subValue === '') continue;
          yamlLines.push(`  ${subKey}: ${typeof subValue === 'string' ? `"${escapeYaml(subValue)}"` : subValue}`);
        }
      } else if (Array.isArray(value)) {
        if (!value.length) continue;
        yamlLines.push(`${key}:`);
        for (const item of value) {
          yamlLines.push(`  - "${escapeYaml(String(item))}"`);
        }
      } else if (typeof value === 'string') {
        yamlLines.push(`${key}: "${escapeYaml(value)}"`);
      } else {
        yamlLines.push(`${key}: ${value}`);
      }
    }
    yamlLines.push('---\n');

    const overview = project.summary || '[Add overview]';
    const highlightSection = highlightLines(project.highlights).join('\n');
    const collaborationSection = collaborationLines(project.collaboration).join('\n');
    const impactSection = project.impact || '[Add impact details]';

    const body = [
      '## Overview',
      overview,
      '',
      '## Responsibilities',
      `- Role: ${project.role}`,
      `- Category: ${project.category}`,
      `- Timeline: ${project.timeline.start ?? '[start]'} -> ${project.timeline.end ?? 'Present'} (${project.timeline.duration ?? 'duration TBD'})`,
      project.stack.length ? `- Stack: ${project.stack.join(', ')}` : '- Stack: [Add stack details]',
      '',
      '## Highlights',
      highlightSection || '- [Add highlights]',
      '',
      '## Collaboration',
      collaborationSection || '- [Add collaboration details]',
      '',
      '## Impact',
      impactSection || '[Add impact details]',
      '',
    ].join('\n');

    await fs.writeFile(filePath, `${yamlLines.join('\n')}${body}`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
