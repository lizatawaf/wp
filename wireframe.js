function toggleWireframe() {
  let wfs = document.getElementById("wireframecss");
  let sts = document.getElementById("stylecss");
  // repeat for other stylesheets you are linking to
  wfs.disabled = !wfs.disabled;
  sts.disabled = !sts.disabled;
  // repeat for other stylesheets you are linking to
}
