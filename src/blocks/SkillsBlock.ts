/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  render(): HTMLElement {
    const sec = document.createElement('section');
    sec.className = 'section skills';
    sec.innerHTML = '<h2>Skills</h2>';

    const skillsContainer = document.createElement('ul');

    for (const [category, skillList] of Object.entries(this.d)) {
      const skillsArray = skillList as string[];

      if (skillsArray && skillsArray.length > 0) {
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `<p class="category-item"><span class="category">${category}:</span> ${skillsArray.join(
          ', '
        )}</p>`;

        skillsContainer.appendChild(categoryItem);
      }
    }

    sec.appendChild(skillsContainer);

    return sec;
  }
}
