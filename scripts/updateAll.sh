#!/bin/sh
set -e
node scripts/updateCatalogue.js
node scripts/updateRepeaters.js
node scripts/updatePulsars.js
