'use strict';
document.addEventListener('DOMContentLoaded', startPathShining);

function startPathShining() {
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if (isClassList !== undefined) {
        let spaceBetweenSectionsA = document.querySelector('#offsetPositioner');
        let spaceBetweenSectionsB = document.querySelector('#secondOffsetPositioner');
        let spaceBetweenSectionsC = document.querySelector('#thirdOffsetPositioner');
        let arr = [];
        arr.push(spaceBetweenSectionsA, spaceBetweenSectionsB, spaceBetweenSectionsC);
        for (let i = 0; i < arr.length; i++) {
            let spaceBetweenSections = arr[i];
            let pathPoints = spaceBetweenSections.querySelectorAll('.path-point');
            let pathBelt = spaceBetweenSections.querySelectorAll('.offset-positioner_path-point-container');
            spaceBetweenSections.addEventListener('mouseover', function () {
                let i = 0;
                toggleThePathVisibility(pathPoints, i);
            });
            spaceBetweenSections.addEventListener('mouseout', function () {
                let i = 0;
                toggleThePathVisibility(pathPoints, i);
            });
        }
    }
}

function toggleThePathVisibility(path, i) {
    let numberOfPoints = path.length;
    if (i < numberOfPoints) {
        let currPath = path[i];
        i++;
        currPath.classList.toggle('pathAnimation');
        setTimeout(function () {
            toggleThePathVisibility(path, i)
        }, 45);
    }
}