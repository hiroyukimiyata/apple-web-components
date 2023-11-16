/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Task} from '@lit/task';

import './apple-card.js';
import './apple-grid.js';

/**
 * An example element.
 * @customElement apple-collection
 */
@customElement('apple-collection')
export class AppleCollection extends LitElement {
  static override styles = css`
  `;

  private _task = new Task(this, {
    task: async ([], {signal}) => {
      const response = await fetch(`https://main--hackathon-2023--hiroyukimiyata.hlx.page/content-modules.json`, {signal});
      if (!response.ok) { throw new Error(String(response.status)); }
      return response.json();
    },
    args: () => []
  });

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  fullwidthrows = 0;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  cols = 2;

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  private getCard(unit: any, large: boolean) {
      return html`<apple-card url=${unit.url} headline="${unit.headline}" subhead="${unit.subhead}" color="${unit.color}" image="${unit.image}" weight="${large ? 'large' : 'normal'}"></apple-card>`;
  }

  override render() {
    return this._task.render({
      pending: () => html`<p>Loading product...</p>`,
      complete: (response) =>
        //console.log(response?.data);
        html`
        <apple-grid cols="1">
          ${response?.data.map((unit) =>
            this.getCard(unit, true)
          ).slice(0, this.fullwidthrows)}
        </apple-grid>
        <apple-grid cols="${this.cols}">
          ${response?.data.map((unit) =>
            this.getCard(unit, false)
          ).slice(this.fullwidthrows, response?.data?.length - ((response?.data?.length - this.fullwidthrows) % this.cols))}
        </apple-grid>
        `,
      error: (e) => html`<p>Error: ${e}</p>`
    });


    return ;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-collection': AppleCollection;
  }
}
