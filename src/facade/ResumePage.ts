import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    try {
      const jsonData = await this.fetchData(jsonPath);
      const importer = new ResumeImporter(jsonData);
      importer.import();
    } catch (error) {
      console.error('Error initializing resume:', error);
    }
  }

  private async fetchData(path: string): Promise<unknown> {
    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(
          `Error loading JSON: ${response.statusText} (${response.status})`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error retrieving data from ${path}:`, error);
      throw error;
    }
  }
}