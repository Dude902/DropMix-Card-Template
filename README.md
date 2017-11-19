# DropMix Card Mockup Template
Conversion of my photoshop-based template for Dropmix musical trading card mockups to a web-based image creator.
<BR>
The world's first and only Dropmix card mockup template.
<BR>
<UL>To do list (loosely in order):
  <LI>Make font display correct regardless of browser zoom.</LI>
  <LI>Make "download image" link visible (detect if data URL is compatible first).</LI>
  <LI>Draw text as soon as it loads instead of waiting.</LI>
  <LI>Allow uploading card art and moving/resizing/rotating.</LI>
  <LI>Make the text boxes and other inputs more immediately responsive to changes.</LI>
  <LI>Add icons to dropdown select options (and radio buttons if it's possible to cleanly isolate graphics for power levels).</LI>
</UL>
<BR>
<UL>Bugs:
  <LI>Font draws at the wrong size and location if browser zoom is not regular/100%.</LI>
  <LI>Text doesn't load right away (set to manually draw after 0.25, 0.5, 1, 2, and 3 seconds and if still not loaded by then, draws when edits are made or card preview is clicked.</LI>
  <LI><strike>Kerning is wrong but is correct after soft-refreshing (maybe fonts loaded incorrectly? potentially switch to typekit font loader https://github.com/typekit/webfontloader#custom instead of current "font observer")</strike>
    <BR>  - Fixed - Fonts load correctly and don't draw until loaded.</LI>
</UL>
