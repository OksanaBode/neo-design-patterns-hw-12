/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory, IBlock } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
   constructor(private jsonData: unknown) {
    super(jsonData);
  }
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   *
   * TODO: Реалізуйте валідацію JSON-даних резюме.
   * Перевірте наявність необхідних полів (header, summary, experience, education, skills)
   */
  protected validate(): void {
     if (!this.raw) {
      throw new Error('Validation Error: No raw data provided.');
    }

    const data = this.raw as Partial<ResumeModel>;
    if (
      !data.header ||
      !data.summary ||
      !data.experience ||
      !data.education ||
      !data.skills
    ) {
      throw new Error(
        'Validation Error: Missing essential resume sections (header, summary, experience, education, skills).'
      );
    }

    console.log('Resume data validated successfully.');
  }

  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   *
   */
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   *
   * TODO: Реалізуйте рендеринг моделі у DOM-дерево
   */
  protected render(model: ResumeModel): void {
    const root = document.getElementById('resume-content')!;
    if (!root) {
      console.error(
        'Error: Element with id "resume-content" not found in the DOM.'
      );
      return;
    }

    root.innerHTML = '';
    const factory = new BlockFactory();

    const headerBlock = factory.createBlock('header', model) as IBlock;
    root.appendChild(headerBlock.render());

    const summaryBlock = factory.createBlock('summary', model) as IBlock;
    root.appendChild(summaryBlock.render());

    const experienceBlock = factory.createBlock('experience', model) as IBlock;
    root.appendChild(experienceBlock.render());

    const educationBlock = factory.createBlock('education', model) as IBlock;
    root.appendChild(educationBlock.render());

    const skillsBlock = factory.createBlock('skills', model) as IBlock;
    root.appendChild(skillsBlock.render());

    console.log('Resume rendering complete.');
  }
}