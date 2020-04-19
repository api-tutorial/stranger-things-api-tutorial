import React from "react";

const Filter = () => (
  <svg viewbox="0 0 100% 100%">
    <defs>
      <circle id="diffuseLightSpot" cx="50%" cy="50%" r="25%" fill="#ea886d" />

      <filter id="stroke">
        <feMorphology
          operator="dilate"
          radius="1.5"
          in="SourceGraphic"
          result="outside"
        />
        <feMorphology
          operator="dilate"
          radius="2"
          in="outside"
          result="thickened"
        />
        <feComposite
          operator="out"
          in2="SourceGraphic"
          in="thickened"
          result="stroke"
        />
      </filter>

      <filter id="bloom">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feBlend in="SourceGraphic" in2="blur" mode="screen" result="bloomed" />
        <feMerge>
          <feMergeNode in="bloomed"></feMergeNode>
          <feMergeNode in="blur"></feMergeNode>
        </feMerge>
      </filter>

      <filter id="bevel">
        <feGaussianBlur stdDeviation="1" in="SourceGraphic" result="BLUR" />

        <feSpecularLighting
          surfaceScale="1"
          specularConstant="5"
          specularExponent="40"
          lighting-color="#ea886d"
          in="BLUR"
          result="SPECULAR"
        >
          <fePointLight x="100" y="0" z="400" />
        </feSpecularLighting>
        <feSpecularLighting
          surfaceScale="1"
          specularConstant="10"
          specularExponent="50"
          lighting-color="#ea886d"
          in="BLUR"
          result="SPECULAR1"
        >
          <fePointLight x="1000" y="0" z="500" />
        </feSpecularLighting>
        {/* We cut off the parts that overlap the source graphic… */}

        <feSpecularLighting
          surfaceScale="1"
          specularConstant="3"
          specularExponent="100"
          lighting-color="#dd7170"
          in="BLUR"
          result="SPECULAR2"
        >
          <fePointLight x="100" y="100" z="1000" />
        </feSpecularLighting>

        <feComposite
          operator="in"
          in="SPECULAR"
          in2="SourceAlpha"
          result="COMPOSITE"
        />
        <feComposite
          operator="in"
          in="SPECULAR1"
          in2="SourceAlpha"
          result="COMPOSITE1"
        />

        <feComposite
          operator="in"
          in="SPECULAR2"
          in2="SourceAlpha"
          result="COMPOSITE2"
        />

        {/*and then merge source graphic and lighting effect:*/}

        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="COMPOSITE" />
          <feMergeNode in="COMPOSITE1" />
          <feMergeNode in="COMPOSITE2" />
        </feMerge>
      </filter>
      <filter id="noise" x="0vw" y="0vh" width="100vw" height="100vh">
        <feFlood flood-color="#808080" result="neutral-gray" />
        <feTurbulence
          in="neutral-gray"
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="10"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          in="noise"
          type="saturate"
          values="0"
          result="destaturatedNoise"
        ></feColorMatrix>
        <feComponentTransfer in="desaturatedNoise" result="theNoise">
          <feFuncA type="table" tableValues="0 0 0.2 0"></feFuncA>
        </feComponentTransfer>
        <feBlend
          in="SourceGraphic"
          in2="theNoise"
          mode="soft-light"
          result="noisy-image"
        />
      </filter>
    </defs>
  </svg>
);

export default Filter;
