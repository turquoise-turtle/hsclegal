# Maintenance

How to keep the generator current. Last reviewed 7 October 2026.

## Files

| file | what it holds |
|---|---|
| `index.html` | the page, its controls and the link preview (Open Graph) tags |
| `generator.js` | the verbs, every question bank and the generator code |
| `og-image.png` | the link preview image, 1200 x 630 |
| `og/card.html`, `og/make-og-image.sh` | the layout for the preview image, and the script that renders it |

## Design

The page uses Material 3 shapes (segmented buttons for Syllabus and Question type, filter chips for Topics) with GOV.UK's bold labels and yellow-and-black focus ring. It is compact on purpose: on a laptop screen, every control and a generated question fit without scrolling. All the styles are in the `<style>` block in `index.html`, and there is no external stylesheet or font.

- **Colours** are the nine custom properties at the top of the `<style>` block: Material 3's colour roles for an orange seed colour. To change the theme, replace all nine together with another Material 3 scheme (Material Theme Builder generates them), then recheck the contrast (see Accessibility).
- **Every chip and segment is a real radio button or checkbox.** The input is visually hidden but still focusable, and its `<label>` draws the control. The tick on a selected item comes from CSS.
- **The link-preview banner** in `og/card.html` uses a brighter orange (`#dc5537`) than the page. That is deliberate: it stands out in a feed. Change it there if you want it to match.

## Calendar

| when | job |
|---|---|
| Each November, after the HSC Legal Studies exam | Check the new paper for verbs or question forms not yet in `essayVerbs` or `shortVerbs` (see Updating the verbs). |
| Whenever NESA posts a notice about the glossary or the syllabus | Check the glossary, syllabus content and record of changes pages linked below. |
| After the 2027 HSC | Make the 2025 syllabus the default (see Retiring the 2009 syllabus). |
| After any visible change to the page | Rebuild the preview image. |

## Sources

- NESA HSC exam papers: <https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/legal-studies>
- NESA glossary of key words: <https://www.nsw.gov.au/education-and-training/nesa/hsc/student-guide/glossary>
- 2025 syllabus (HSC from 2028): <https://curriculum.nsw.edu.au/learning-areas/hsie/legal-studies-11-12-2025/overview>
- 2009 syllabus (HSC up to 2027): <https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsie/legal-studies-stage-6-2009>
- Trial papers: <https://thsconline.github.io/s/yr12/Legal%20Studies/trialpapers.html>

## How the data is laid out

Everything is in the `syllabuses` object at the top of `generator.js`:

```js
syllabuses['2009'].banks.crime = { name, core, area, themes, topics, learnto }
syllabuses['2025'].themes = [ ... ]                       // shared by every 2025 bank
syllabuses['2025'].banks.crime = { name, core, area, topics, dotpoints }
```

- `name` is the checkbox label and the prefix on a generated question.
- `core: true` puts the checkbox on the Core line. Leave it out for an option.
- `area` is the whole focus area, used as an extra topic ("... in relation to family law").
- `themes` are the themes and challenges. In the 2009 syllabus each bank has its own. In the 2025 syllabus one shared list (`syllabuses['2025'].themes`) covers every bank, so 2025 banks have no `themes` of their own.
- `topics` are the syllabus headings (2009) or content groups (2025).
- `learnto` (2009) holds the "students learn to" points. Each one is already a whole short-answer question.
- `dotpoints` (2025) holds the content dot points. Each one is paired with every verb in `shortVerbs`.

Essay questions are every combination of verb x theme x (`area` plus each topic). Short answers come from `learnto` or `dotpoints`. Questions are built when first asked for and then cached, so the size of the data does not slow the page down.

### Contemporary issues (2009 syllabus)

These topics follow the wording of real papers. In October 2026 I checked the 2015-2025 HSC papers and 44 school trial papers (2011-2025):

- **Human rights:** the syllabus only suggests issues ("Issues could include ..."), and every written question leaves the choice to the student, as in HSC 2024's "a contemporary human rights issue". So the topic is that generic phrase, not a named issue such as genocide. Named issues appear only in multiple-choice questions.
- **Options:** the syllabus lists issues that must be studied, and papers ask both ways: named ("the contemporary issue of land rights") and generic ("at least ONE contemporary issue concerning family law", HSC 2017). So each option has its named issues as topics, plus one generic topic in that wording.

A text box that let students type their own human rights issue was tried and removed (October 2026). Keeping the generic wording matches what students see in the exam, where they must choose and name their issue themselves.

### Writing rules for the data

Every theme, topic and dot point is slotted into a sentence, so it must read correctly in these two positions:

- after a verb: "Evaluate **the role of law reform in the criminal justice system** in relation to ..."
- after "in relation to": "... in relation to **sentencing and punishment**."

So:

- Start with a lower-case letter unless the first word is a proper noun ("Australia's ...", "Aboriginal and Torres Strait Islander ...") or emphasised syllabus wording ("ONE case study ...").
- No full stop at the end.
- Use straight apostrophes and hyphens, not curly quotes or en dashes. Inside the single-quoted strings, write an apostrophe as `\'`.
- Use Australian spelling (organisation, recognise, behaviour, labour).
- Keep the syllabus wording. Only reword when the sentence would otherwise be ungrammatical, as with "Investigation" becoming "criminal investigation".

## Updating the verbs

The verb lists are at the top of `generator.js`:

```js
const essayVerbs = ['Discuss', 'Assess', 'Evaluate', 'Analyse', 'Explain', 'Examine', 'To what extent', 'How effective', 'How well'];
const shortVerbs = ['Identify', 'Define', 'Outline', 'Describe', 'Explain', 'Compare', 'Discuss', 'Analyse', 'Examine', 'Justify', 'Why', 'Assess', 'Evaluate'];
```

These came from the 2015-2025 HSC papers, the 2025 syllabus sample paper and 44 school trial papers from 2011-2025 (October 2026).

To check them against a new paper:

1. Download the latest exam paper from the NESA exam papers page.
2. Read the Section II extended response and the Section III option questions (essays), and the Section II short-answer items.
3. Note any verb or opening phrase not already listed. The NESA glossary gives the official meaning of each verb.

To add a verb:

- **An imperative verb** (Justify, Examine, Critically analyse): add it to the relevant list. The default template ("Verb theme in relation to topic.") handles it.
- **A question form that isn't a command** (To what extent, How effective, How well, How far): add it to `essayVerbs`, then add a `case` for it in `essayQuestion()` that builds a full question, as the existing ones do. For short answers, do the same in `shortQuestion()`, as for Why. Dot points can be singular or plural, so avoid patterns that need "is" or "are" straight after the dot point.

`shortVerbs` only applies to the 2025 syllabus. 2009 short answers keep the verb already written into each `learnto` point.

## Updating the syllabus points

### 2025 syllabus

The NESA curriculum site builds its pages with JavaScript, so a plain download of the HTML doesn't contain the dot points. Options:

- Read them in a browser on each focus area page (Content > Year 12), and copy them across.
- Or save the page and read the JSON inside `<script id="__NEXT_DATA__">`. Each focus area holds `contentgroups` (the topics). Each content group holds `content_items` (the dot points), whose `title` is the text. The options are on the "Options" page, under `focus_area_options`.

Then edit the matching bank's `topics` and `dotpoints`, and the shared `themes` if the Legal themes and skills or evaluation criteria change.

### 2009 syllabus

The syllabus is now fixed and will not change before it is retired, so this should only be needed to fix a mistake. The Word version on the NESA page is the easiest to copy from.

### Adding or removing a topic (bank)

1. Add an entry under `banks` with a short lower-case key, such as `housing`.
2. Fill in `name`, `area`, `topics`, then `learnto` or `dotpoints`, plus `themes` for a 2009 bank. Add `core: true` if it is core content.
3. Nothing else needs changing. The checkboxes are built from the data.

Use the same key for the same subject in both syllabuses (`crime`, `humanrights`, `consumers`, `family`, `workplace`). That way a student's ticks carry over when they switch syllabus.

## Retiring the 2009 syllabus (after the 2027 HSC)

1. In `index.html`, move `checked` from the 2009 radio button to the 2025 one.
2. Later, once nobody needs it: delete the 2009 radio button and `syllabuses['2009']` in `generator.js`. With one syllabus left, the Syllabus box could be removed and `checkedValue('syllabus')` replaced by `'2025'`.
3. Rebuild the preview image.

## Checking a change

There is no test suite. After editing:

1. Open `index.html` in a browser. It works straight from the file, without a server.
2. For each syllabus and each question type, tick all topics and click **List all questions**. Every topic should appear with a count. Skim for broken sentences, a stray "undefined", or curly quotes.
3. Click **Generate question** a few times with different topics ticked.
4. Untick all topics and click Generate. It should ask you to tick a topic.
5. Check the browser console for errors.
6. Run the accessibility checks below.

## Accessibility

The page should meet WCAG 2.2 AA. After any change to the page or its styles:

- **Keyboard:** Tab reaches every control in order, arrow keys switch Syllabus and Question type, Space ticks a topic, and the focus ring is clearly visible on every control.
- **Real inputs:** the controls must stay real `<input type="radio">` and `<input type="checkbox">` inside a `<label>`, grouped in a `<fieldset>` with a `<legend>`. Styled chips and segments are drawn by CSS around them. Never replace them with clickable `<div>`s.
- **Not colour alone:** the selected state must show something other than colour, such as the tick mark or bold text, so it survives colour blindness and Windows high-contrast mode.
- **Contrast:** text needs 4.5:1 against its background. Control borders and the focus ring need 3:1. Check every colour theme, in dark mode too.
- **Screen readers:** `#status` is the only live region, and it holds one short line (the question, or "N questions"). The long list goes in `#output`, which is not live, so it is never read out in full. Decorative symbols added with CSS use empty alt text, such as `content: "\2713" / "";`.
- **Automated scan:** load axe-core from <https://cdnjs.cloudflare.com/ajax/libs/axe-core/> in the browser console, then run `await axe.run()`. Expect no violations.
- **Phone width:** at 390px wide nothing should need sideways scrolling, and every control should be at least 24 x 24px (WCAG 2.2 target size).

## Link preview image

`og-image.png` is a fixed image in the repository, so it doesn't change when the page does. After any visible change to the page:

1. Run `og/make-og-image.sh` (needs Google Chrome). It copies the current page into a temporary folder, ticks Crime, Consumers and Family, shows a fixed Crime essay question, and saves a 1200 x 630 screenshot over `og-image.png`.
2. Look at the image before committing it. To change the banner, colours or layout, edit `og/card.html`.
3. If the image now shows something different, update `og:image:alt` in `index.html` to match.
4. Commit and push. Then paste the site address into Facebook's Sharing Debugger (<https://developers.facebook.com/tools/debug/>) and click **Scrape Again**, because Facebook keeps the old preview otherwise. Other apps refresh their copy on their own, usually within a few days.

The preview tags are in the `<head>` of `index.html`. If the site address changes, update `og:url` and `og:image`, which must be full addresses beginning `https://`.
