export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repository vendor che contengono skill pronte da sincronizzare.
 * Ogni vendor diventa un git submodule in vendor/<nome>.
 * Le skill vengono copiate da vendor/<nome>/skills/<source> a skills/<output>.
 */
export const vendors: Record<string, VendorSkillMeta> = {
  anthonyfu: {
    source: 'https://github.com/antfu/skills',
    skills: {
      'vitest': 'vitest',
      'vue-best-practices': 'vue-best-practices',
      'vue-router-best-practices': 'vue-router-best-practices',
      'vueuse-functions': 'vueuse-functions',
      'web-design-guidelines': 'web-design-guidelines',
    },
  },
  addyosmani: {
    source: 'https://github.com/addyosmani/agent-skills',
    skills: {
      'idea-refine': 'idea-refine',
      'spec-driven-development': 'spec-driven-development',
      'planning-and-task-breakdown': 'planning-and-task-breakdown',
      'incremental-implementation': 'incremental-implementation',
      'test-driven-development': 'test-driven-development',
      'context-engineering': 'context-engineering',
      'source-driven-development': 'source-driven-development',
      'frontend-ui-engineering': 'frontend-ui-engineering',
      'api-and-interface-design': 'api-and-interface-design',
      'browser-testing-with-devtools': 'browser-testing-with-devtools',
      'debugging-and-error-recovery': 'debugging-and-error-recovery',
      'code-review-and-quality': 'code-review-and-quality',
      'code-simplification': 'code-simplification',
      'security-and-hardening': 'security-and-hardening',
      'performance-optimization': 'performance-optimization',
      'git-workflow-and-versioning': 'git-workflow-and-versioning',
      'ci-cd-and-automation': 'ci-cd-and-automation',
      'deprecation-and-migration': 'deprecation-and-migration',
      'documentation-and-adrs': 'documentation-and-adrs',
      'shipping-and-launch': 'shipping-and-launch',
    },
  },
}

/**
 * Skill scritte a mano, mantenute direttamente in skills/<nome>.
 * Il CLI le ignora durante sync e cleanup.
 */
export const manual = [
  'scrivi-bene',
]
