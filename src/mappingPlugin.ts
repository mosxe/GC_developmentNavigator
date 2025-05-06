import { type PluginOption } from "vite";
import type { OutputChunk, OutputAsset } from "rollup";
import fs from "fs";
import path from "path";

export default function viteMappingPlugin(pathPrefix: string): PluginOption {
  return {
    name: "vite-mapping-plugin",
    apply: "build",
    writeBundle(
      options: { dir?: string; file?: string },
      bundle: Record<string, OutputChunk | OutputAsset>
    ) {
      const mappingEntries: string[] = [];
      const outputFile = ".mapping";
      const outputDir =
        options.dir || (options.file ? path.dirname(options.file) : "");

      if (!outputDir) {
        console.warn("Could not determine output directory for mapping file");
        return;
      }

      Object.values(bundle).forEach((chunk) => {
        if (chunk.type === "chunk" || chunk.type === "asset") {
          const baseName = path.basename(chunk.fileName);
          const leftPath = `wt/web/components/${pathPrefix}/web/assets/${baseName}`;
          const rightPath = `components/${pathPrefix}/web/assets/${baseName}`;

          mappingEntries.push(`${leftPath}|${rightPath}`);
        }
      });

      try {
        const mappingPath = path.join(outputDir, outputFile);
        fs.writeFileSync(mappingPath, mappingEntries.join("\n"));
        console.log(`Successfully created mapping file at ${mappingPath}`);
      } catch (error) {
        console.error("Failed to write mapping file:", error);
      }
    },
  };
}
