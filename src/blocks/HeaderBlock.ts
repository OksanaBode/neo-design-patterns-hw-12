/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel['header']) {}

  render(): HTMLElement {
    const header = document.createElement('header');
    header.className = 'section header';
    header.innerHTML = `
            <h1>${this.d.fullName}</h1>
            <p class="title">${this.d.title}</p>
            <div class="contacts">
              <p><a href="mailto:${this.d.contacts.email}">${this.d.contacts.email}</a></p>
              <p>${this.d.contacts.phone}</p>
              <p>${this.d.contacts.location}</p>
            </div>
        `;

    return header;
  }
}