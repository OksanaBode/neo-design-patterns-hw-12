/**
 * Блок проєкту - є частиною патерну Composite
 * Це "листовий" компонент, який не має дочірніх елементів
 */

import { Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class ProjectBlock implements IBlock {
  constructor(private d: Project) {}

  render(): HTMLElement {
    const container = document.createElement('li');
    container.className = 'project-item';
    container.innerHTML = `
            <p class="project">${this.d.name} - ${this.d.description}</p>
        `;

    return container;
  }
}