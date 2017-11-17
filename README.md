# Dropmix-Card-Template
Conversion of my photoshop-based template for Dropmix musical trading card mockups to a web-based image creator. The world's only Dropmix card mockup template.
<BR>
<UL>To do list (loosely in order):
  <LI>Draw text as soon as it loads instead of waiting.</LI>
  <LI>Make the text boxes and other inputs more immediately responsive to changes.</LI>
  <LI>Allow uploading card art and moving/resizing/rotating.</LI>
</UL>
<BR>
<UL>Bugs:
  <LI>Text doesn't load right away (set to manually draw after 0.25, 0.5, and 1 second, and if still not loaded by then, loads when edits are made or card preview is clicked.</LI>
  <LI><strike>Kerning is wrong but is correct after soft-refreshing (maybe fonts loaded incorrectly? potentially switch to typekit font loader https://github.com/typekit/webfontloader#custom instead of current "font observer")</strike> Fixed - Fonts load correctly and don't draw until loaded.</LI>
</UL>
