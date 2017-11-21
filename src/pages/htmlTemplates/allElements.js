export default (/* data */) => (`
  <div id="top" class="page" role="document">
    <main role="main">
      <section id="text">
        <article id="text__headings">
          <header>
            <h1>Headings</h1>
          </header>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
        </article>
        <article id="text__paragraphs">
          <header><h1>Paragraphs</h1></header>
          <div>
            <p>A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
          </div>
        </article>
        <article id="text__blockquotes">
          <header><h1>Blockquotes</h1></header>
          <div>
            <blockquote>
              <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
              <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
              <cite><a href="#!">Said no one, ever.</a></cite>
            </blockquote>
          </div>
        </article>
        <article id="text__lists">
          <header><h1>Lists</h1></header>
          <div>
            <h3>Definition list</h3>
            <dl>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
            </dl>
            <h3>Ordered List</h3>
            <ol>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ol>
            <h3>Unordered List</h3>
            <ul>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ul>
          </div>
        </article>
        <article id="text__hr">
          <header><h1>Horizontal rules</h1></header>
          <div>
            <hr>
          </div>
        </article>
        <article id="text__tables">
          <header><h1>Tabular data</h1></header>
          <table>
            <caption>Table Caption</caption>
            <thead>
              <tr>
                <th>Table Heading 1</th>
                <th>Table Heading 2</th>
                <th>Table Heading 3</th>
                <th>Table Heading 4</th>
                <th>Table Heading 5</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Table Footer 1</th>
                <th>Table Footer 2</th>
                <th>Table Footer 3</th>
                <th>Table Footer 4</th>
                <th>Table Footer 5</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article id="text__code">
          <header><h1>Code</h1></header>
          <div>
            <p><strong>Keyboard input:</strong> <kbd>Cmd</kbd></p>
            <p><strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code></p>
            <p><strong>Sample output:</strong> <samp>This is sample output from a computer program.</samp></p>
            <h2>Pre-formatted text</h2>
            <pre>P R E F O R M A T T E D T E X T
  ! " # $ % &amp; ' ( ) * + , - . /
  0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
  @ A B C D E F G H I J K L M N O
  P Q R S T U V W X Y Z [ \\ ] ^ _
  \` a b c d e f g h i j k l m n o
  p q r s t u v w x y z { | } ~ </pre>
          </div>
        </article>
        <article id="text__inline">
          <header><h1>Inline elements</h1></header>
          <div>
            <p><a href="#!">This is a text link</a>.</p>
            <p><strong>Strong is used to indicate strong importance.</strong></p>
            <p><em>This text has added emphasis.</em></p>
            <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>
            <p>The <i>i element</i> is text that is offset from the normal text.</p>
            <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
            <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
            <p><s>This text has a strikethrough</s>.</p>
            <p>Superscript<sup>®</sup>.</p>
            <p>Subscript for things like H<sub>2</sub>O.</p>
            <p><small>This small text is small for for fine print, etc.</small></p>
            <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
            <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
            <p><cite>This is a citation.</cite></p>
            <p>The <dfn>dfn element</dfn> indicates a definition.</p>
            <p>The <mark>mark element</mark> indicates a highlight.</p>
            <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
            <p>The time element: <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
          </div>
        </article>
      </section>
      <section id="forms">
        <header><h1>Form elements</h1></header>
        <form>
          <fieldset id="forms__input">
            <legend>Input fields</legend>
            <p>
              <label for="input__text">Text Input</label>
              <input id="input__text" type="text" placeholder="Text Input">
            </p>
          </fieldset>
          <fieldset id="forms__select">
            <legend>Select menus</legend>
            <p>
              <label for="select">Select</label>
              <select id="select">
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
          </fieldset>
          <fieldset id="forms__checkbox">
            <legend>Checkboxes</legend>
            <ul class="list list--bare">
              <li><label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label></li>
              <li><label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label></li>
              <li><label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label></li>
            </ul>
          </fieldset>
          <fieldset id="forms__radio">
            <legend>Radio buttons</legend>
            <ul class="list list--bare">
              <li><label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label></li>
              <li><label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label></li>
              <li><label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option 3</label></li>
            </ul>
          </fieldset>
          <fieldset id="forms__textareas">
            <legend>Textareas</legend>
            <p>
              <label for="textarea">Textarea</label>
              <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
            </p>
          </fieldset>
          <fieldset id="forms__action">
            <legend>Action buttons</legend>
            <p>
              <button type="submit">&lt;button type=submit&gt;</button>
              <button type="button" disabled>&lt;button disabled&gt;</button>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  </div>
`);
