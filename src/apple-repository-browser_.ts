/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Task} from '@lit/task';

import './apple-collection.js';

/**
 * An example element.
 * @customElement apple-repository-browser
 */
@customElement('apple-repository-browser')
export class AppleRepositoryBrowser extends LitElement {
  static override styles = css`
  `;

  @property()
  fullwidthrows = 0;
  handleFullWidthRows: EventListener = (event) => {
    const target = event.currentTarget;
    if (!(target instanceof HTMLInputElement)) throw Error("This listener must be used with an Input Element.");
    this.fullwidthrows = Number(target.value);
  }

  @property()
  cols = 2;
  handleCols: EventListener = (event) => {
    const target = event.currentTarget;
    if (!(target instanceof HTMLInputElement)) throw Error("This listener must be used with an Input Element.");
    this.cols = Number(target.value);
  }

  @property()
  tags = '';
  handleTags: EventListener = (event) => {
    console.log("tags!!");
    const target = event.currentTarget;
    console.log(event);
  }

  @property()
  condition = 'and';
  handleCondition: EventListener = (event) => {
    const target = event.currentTarget;
    if (!(target instanceof HTMLInputElement)) throw Error("This listener must be used with an Input Element.");
    this.condition = target.value;
  }

  @property()
  algorithm = 'normal';
  handleAlgorithm: EventListener = (event) => {
    const target = event.currentTarget;
    this.algorithm = target.value;
  }

  private _task = new Task(this, {
    task: async ([], {signal}) => {
      const response = await fetch(`https://main--hackathon-2023--hiroyukimiyata.hlx.page/content-modules.json?sheet=tags`, {signal});
      if (!response.ok) { throw new Error(String(response.status)); }

      return response.json();
    },
    args: () => []
  });

  override render() {
    return this._task.render({
      pending: () => html`<p>Loading product...</p>`,
      complete: (tags) =>
        html`
        <form id="repoform" name="repoform">
          <label for="display">display: </label>
          <select name="display">
              <option value="card">card</option>>
          </select>
          
          <label for="fullwidthrows">fullwidthrows: </label><input type="number" id="fullwidthrows" name="fullwidthrows" min="0" max="100" value="0" @change=${this.handleFullWidthRows} />
          
          <label for="cols">cols: </label><input type="number" id="cols" name="cols" min="1" max="4" value="2" @change=${this.handleCols} />
          
          <label for="tags">tags: </label>
          <select id="tags" name="tags" multiple size="5" @change=${this.handleTags}>
          ${tags.data.map((tag) =>
              html`<option value="${tag.id}">${tag.id}</option>`
            )}
          </select>

          <label for="condition">condition: </label>
          <select name="condition" @change=${this.handleCondition}>
              <option value="and">and</option>
              <option value="or">or</option>
          </select>

          <label for="algorithm">algorithm: </label>
          <select name="algorithm" @change=${this.handleAlgorithm}>
              <option value="normal">normal</option>
              <option value="random">random</option>
              <option value="recommended-for-you">recommended-for-you</option>
          </select>
        </form>
        <br/><br/><br/>
        <apple-collection
          display="card"
          fullwidthrows="${this.fullwidthrows}"
          cols="${this.cols}"
          tags=""
          condition="${this.condition}"
          algorithm="${this.algorithm}">
        </apple-collection>
        `,
      error: (e) => html`<p>Error: ${e}</p>`
    });


    return ;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-repository-browser': AppleRepositoryBrowser;
  }
}
