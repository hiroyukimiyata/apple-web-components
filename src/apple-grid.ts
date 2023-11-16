/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, queryAssignedElements} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @customElement apple-grid
 */
@customElement('apple-grid')
export class AppleGrid extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border-width: 0px;
      color: rgb(29, 29, 31);
      font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .grid-container {
      display: grid;
      grid-auto-rows: 580px;
      row-gap: 12px;
      column-gap: 12px;
      margin-top: 12px;
      padding: 0px;
    }
    .grid-1 {
      grid-template-columns: auto;
      padding: 0px;
      margin: 0px;
    }
    .grid-2 {
      grid-template-columns: auto auto;
      padding: 0px 12px;
    }
    .grid-3 {
      grid-template-columns: auto auto auto;
      padding: 0px 12px;
    }
    .grid-4 {
      grid-template-columns: auto auto auto auto;
      padding: 0px 12px;
    }
  `;

  /**
   * The number of columns.
   */
  @property({type: Number})
  cols = 1;

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  getCols(): Number {
    if(this.cols >= 1 && this.cols <= 4) {
      return this.cols;
    } else {
      return 1;
    }
  }

  @queryAssignedElements({flatten: true})
  _listItems!: Array<HTMLElement>;

  override render() {
    console.log(this._listItems);
    return html`
      <div class="grid-container grid-${this.getCols()}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-grid': AppleGrid;
  }
}
