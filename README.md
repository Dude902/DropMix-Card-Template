# DropMix Card Mockup Template
Conversion of my photoshop-based template for Dropmix musical trading card mockups to a web-based image creator. Made by Adam N. A. (@AdamUnavailable).
<BR>
The world's first and only Dropmix card mockup template.
<BR>
<UL>Required changes:
  <LI>- Harmonix staff have asked me to remove playlist icons except for the "DM" icon, and suggested adding made-up playlist icons in their place.</LI>
  <LI>- Harmonix staff also asked me to remove the editable copyright text for legal reasons and to replace it with text stating the card is unofficial.</Li>
  <BR>Overall, it is a good thing that Harmonix has acknowledged the existance of the mockup creator and asked for reasonable changes rather than the alternative of shutting it down. I have fully complied with their requests.
</UL>
<UL>To do list (loosely in order):
  <LI>*Allow uploading card art and moving/resizing/rotating.
    <BR>*Moving and resizing work as intended.
      <BR>- Resizing with sliders and text boxes is not as intuitive as I would like. Transform controls overlayed on the image would be ideal.
    <BR>* Rotation sliders functional but buggy. Disabled for now.
      <BR>- Shifting rotated images moves them with respect to the rotation, instead of moving straight with respect to the card.
      <BR>- Resetting or centering a rotated and scaled or flipped image causes skewing</LI>
  <LI>*Allow uploading transparent images as playlist icons, automatically recoloring the non-transparent part to a white silhouette and resizing to approximately the right size</LI>
  <LI>Reset buttons for each text box</LI>
  <LI>Draw text as soon as it loads instead of waiting.</LI>
  <LI>Make the text boxes and other inputs more immediately responsive to changes.</LI>
  <BR>
  <LI>*Add remaining missing assets if possible.</LI>
  <LI>*Add mobile support (partially in place).
    <BR>  - All major features work on mobile, but may have issues and be less responsive in updating changes. Tapping/clicking in most places should force it to update.</LI>
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
