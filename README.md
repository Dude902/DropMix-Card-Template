# DropMix Card Mockup Template
Conversion of my photoshop-based template for Dropmix musical trading card mockups to a web-based image creator.
<BR>
The world's first and only Dropmix card mockup template.
<BR>
<UL>To do list (loosely in order):
  <LI>*Allow uploading card art and moving/resizing/rotating.
    <BR>* Rotation sliders functional but buggy.
      <BR>- Shifting rotated images moves them with respect to the rotation, instead of moving straight with respect to the card.
      <BR>- Resetting or centering a rotated and scaled or flipped image causes skewing</LI>
  <LI>Draw text as soon as it loads instead of waiting.</LI>
  <LI>Make the text boxes and other inputs more immediately responsive to changes.</LI>
  <BR>
  <LI>*Add remaining missing assets if possible.</LI>
  <LI>*Add mobile support (partially in place).</LI>
</UL>
  * - mostly done
<BR><BR>
<UL>Bugs:
  <LI>Text doesn't load right away (set to manually draw after 0.25, 0.5, 1, 2, and 3 seconds and if still not loaded by then, draws when edits are made or card preview is clicked.</LI>
  <LI>Text may break on iOS after switching away from tab and returning. (font/cache-related?)</LI>
  <LI><strike>Kerning is wrong but is correct after soft-refreshing (maybe fonts loaded incorrectly? potentially switch to typekit font loader https://github.com/typekit/webfontloader#custom instead of current "font observer")</strike>
    <BR>  - FIXED - Fonts load correctly and don't draw until loaded.</LI>
  <LI><strike>Text draws at the wrong size and location if browser zoom is not regular/100%.</strike>
    <BR>  - FIXED - Text draws at the same size (or as close an approximation as possible) regardless of browser zoom.</LI>
  <LI><strike>Manipulating card art is untested on mobile.</strike>
    <BR>  - FIXED -  Manipulating card art on mobile is functional. Mouse events were given touch event equivalents.</LI>
  <LI>Probably more.</LI>
</UL>
