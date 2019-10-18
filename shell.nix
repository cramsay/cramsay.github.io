{ nixpkgs ? import <nixpkgs> {} }:
let
  inherit (nixpkgs) pkgs;
  nixPackages = [
    pkgs.ruby
    pkgs.jekyll
    pkgs.zlib
  ];
in
pkgs.stdenv.mkDerivation {
  name = "env";
  buildInputs = nixPackages;
  shellHooks = "bundle exec jekyll serve --livereload";
}
