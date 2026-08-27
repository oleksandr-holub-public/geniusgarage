import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (e.g., Input):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.test.tsx",
        templateFile: "templates/component-test.hbs",
      },
      {
        type: "append",
        path: "{{ turbo.paths.root }}/packages/ui/src/index.ts",
        template:
          'export { {{pascalCase name}} } from "./{{kebabCase name}}/{{kebabCase name}}";',
      },
    ],
  });

  plop.setGenerator("package", {
    description: "Create a new shared package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Package name (e.g., db):",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "{{ turbo.paths.root }}/packages/{{name}}",
        base: "templates/package",
        templateFiles: "templates/package/**",
      },
    ],
  });
}
