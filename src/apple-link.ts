/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 * @customElement apple-link
 */
@customElement('apple-link')
export class AppleLink extends LitElement {
  static override styles = css`
    a {
      text-decoration: none;
      font-size: 16px;
      color: rgb(0, 102, 204);
    }
    a::after {
      color: rgb(0, 102, 204);
      content: '';
      display: inline-block;
      width: 0.7em;
      height: 0.7em;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cstyle%3Esvg%7Bfill:%230066cc%7D%3C/style%3E%3Cpath d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  `;

@property()
text = '';

@property()
href = '#';

override render() {
  return html`
      <a href="${this.href}"><slot></slot></a>
      <i class="fa-solid fa-angle-right"></i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-link': AppleLink;
  }
}
