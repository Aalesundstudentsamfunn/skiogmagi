var Yn=`<!-- prettier-ignore -->
<template id="media-theme-classic">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));
      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-text-shadow: none;
      --media-menu-border-radius: 2px;
      --media-menu-transform-in: translateY(-8px) scale(1);
      --media-menu-transform-out: translateY(-6px) scale(.99);
      --media-menu-item-hover-background: rgba(255, 255, 255, 0.28);
      --media-tooltip-display: none;
      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    media-rendition-menu,
    media-audio-track-menu,
    media-captions-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
    }

    media-rendition-menu {
      min-width: 140px;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled]:not(media-live-button),
    [aria-disabled='true']:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused],:not([userinactive])) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
     @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpointsm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpointmd] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      /* Adding px is required here for calc() */
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardseekoffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 24">
        <path
          d="M2.25 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="header">Quality</div>
    </media-rendition-menu>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 24 24">
        <path d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
        <path d="M7.25 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75Zm3 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z"/>
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="header">Audio</div>
    </media-audio-track-menu>
  </template>

  <template partial="CaptionsSelect">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"/>
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackrates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="thumb"
    ></media-time-range>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    
    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AudioTrackSelect}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">

        <template if="targetlivewindow > 0">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetlivewindow">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <template if="streamtype == 'on-demand'">

        <template if="!breakpointsm">
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsSelect}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <template if="!breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>PlaybackRateButton}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointmd">
          <media-control-bar part="control-bar top" slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>RenditionSelect}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>CaptionsSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetlivewindow > 0">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`,Fa=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Fa{}globalThis.DocumentFragment=t}var za=class extends Fa{},Qn={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(za)}};function Xn(t,e){return new za}var Ya={document:{createElement:Xn},customElements:Qn},Qa=typeof window>"u"||typeof globalThis.customElements>"u",ya=Qa?Ya:globalThis,Jn=Qa?Ya.document:globalThis.document,Zt={MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest"},J={MEDIA_CONTROLLER:"mediacontroller"},jn={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Xa=Object.entries(jn),l=Xa.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),tr={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Ze=Xa.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...tr});Object.entries(Ze).reduce((t,[e,i])=>{const a=l[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});Object.entries(l).reduce((t,[e,i])=>{const a=Ze[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"});var Ta={SUBTITLES:"subtitles",CAPTIONS:"captions"},Ja=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},ja=class extends Ja{},Aa=class extends ja{constructor(){super(...arguments),this.role=null}},er=class{observe(){}unobserve(){}disconnect(){}},tn={createElement:function(){return new se.HTMLElement},createElementNS:function(){return new se.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},se={ResizeObserver:er,document:tn,Node:ja,Element:Aa,HTMLElement:class extends Aa{constructor(){super(...arguments),this.innerHTML=""}get content(){return new se.DocumentFragment}},DocumentFragment:class extends Ja{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},en="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",an=Object.keys(se).every(t=>t in globalThis),d=en&&!an?se:globalThis,le=en&&!an?tn:globalThis.document,nn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},u=(t,e,i)=>(nn(t,e,"read from private field"),i?i.call(t):e.get(t)),H=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Z=(t,e,i,a)=>(nn(t,e,"write to private field"),e.set(t,i),i),yt,_e,st,Xt,G,q,F,lt,Tt,ye,x,wa=1,Sa=0,ir=1,ar={processCallback(t,e,i){if(i){for(const[a,n]of e)if(a in i){const r=i[a];typeof r=="boolean"&&n instanceof mt&&typeof n.element[n.attributeName]=="boolean"?n.booleanValue=r:typeof r=="function"&&n instanceof mt?n.element[n.attributeName]=r:n.value=r}}}},Qi=class extends d.DocumentFragment{constructor(t,e,i=ar){var a;super(),H(this,yt,void 0),H(this,_e,void 0),this.append(t.content.cloneNode(!0)),Z(this,yt,rn(this)),Z(this,_e,i),(a=i.createCallback)==null||a.call(i,this,u(this,yt),e),i.processCallback(this,u(this,yt),e)}update(t){u(this,_e).processCallback(this,u(this,yt),t)}};yt=new WeakMap;_e=new WeakMap;var rn=(t,e=[])=>{let i,a;for(const n of t.attributes||[])if(n.value.includes("{{")){const r=new rr;for([i,a]of xa(n.value))if(!i)r.append(a);else{const o=new mt(t,n.name,n.namespaceURI);r.append(o),e.push([a,o])}n.value=r.toString()}for(const n of t.childNodes)if(n.nodeType===wa&&!(n instanceof HTMLTemplateElement))rn(n,e);else{const r=n.data;if(n.nodeType===wa||r.includes("{{")){const o=[];if(r)for([i,a]of xa(r))if(!i)o.push(new Text(a));else{const s=new ln(t);o.push(s),e.push([a,s])}else if(n instanceof HTMLTemplateElement){const s=new dn(t,n);o.push(s),e.push([s.expression,s])}n.replaceWith(...o.flatMap(s=>s.replacementNodes||[s]))}}return e},Ma={},xa=t=>{let e="",i=0,a=Ma[t],n=0,r;if(a)return a;for(a=[];r=t[n];n++)r==="{"&&t[n+1]==="{"&&t[n-1]!=="\\"&&t[n+2]&&++i==1?(e&&a.push([Sa,e]),e="",n++):r==="}"&&t[n+1]==="}"&&t[n-1]!=="\\"&&!--i?(a.push([ir,e.trim()]),e="",n++):e+=r||"";return e&&a.push([Sa,(i>0?"{{":"")+e]),Ma[t]=a},nr=11,on=class{get value(){return""}set value(t){}toString(){return this.value}},sn=new WeakMap,rr=class{constructor(){H(this,st,[])}[Symbol.iterator](){return u(this,st).values()}get length(){return u(this,st).length}item(t){return u(this,st)[t]}append(...t){for(const e of t)e instanceof mt&&sn.set(e,this),u(this,st).push(e)}toString(){return u(this,st).join("")}};st=new WeakMap;var mt=class extends on{constructor(t,e,i){super(),H(this,lt),H(this,Xt,""),H(this,G,void 0),H(this,q,void 0),H(this,F,void 0),Z(this,G,t),Z(this,q,e),Z(this,F,i)}get attributeName(){return u(this,q)}get attributeNamespace(){return u(this,F)}get element(){return u(this,G)}get value(){return u(this,Xt)}set value(t){u(this,Xt)!==t&&(Z(this,Xt,t),!u(this,lt,Tt)||u(this,lt,Tt).length===1?t==null?u(this,G).removeAttributeNS(u(this,F),u(this,q)):u(this,G).setAttributeNS(u(this,F),u(this,q),t):u(this,G).setAttributeNS(u(this,F),u(this,q),u(this,lt,Tt).toString()))}get booleanValue(){return u(this,G).hasAttributeNS(u(this,F),u(this,q))}set booleanValue(t){if(!u(this,lt,Tt)||u(this,lt,Tt).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}};Xt=new WeakMap;G=new WeakMap;q=new WeakMap;F=new WeakMap;lt=new WeakSet;Tt=function(){return sn.get(this)};var ln=class extends on{constructor(t,e){super(),H(this,ye,void 0),H(this,x,void 0),Z(this,ye,t),Z(this,x,e?[...e]:[new Text])}get replacementNodes(){return u(this,x)}get parentNode(){return u(this,ye)}get nextSibling(){return u(this,x)[u(this,x).length-1].nextSibling}get previousSibling(){return u(this,x)[0].previousSibling}get value(){return u(this,x).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const e=t.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===nr?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);e.length||e.push(new Text),Z(this,x,or(u(this,x)[0].parentNode,u(this,x),e,this.nextSibling))}};ye=new WeakMap;x=new WeakMap;var dn=class extends ln{constructor(t,e){const i=e.getAttribute("directive")||e.getAttribute("type");let a=e.getAttribute("expression")||e.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(t),this.expression=a,this.template=e,this.directive=i}};function or(t,e,i,a=null){let n=0,r,o,s,m=i.length,c=e.length;for(;n<m&&n<c&&e[n]==i[n];)n++;for(;n<m&&n<c&&i[m-1]==e[c-1];)a=i[--c,--m];if(n==c)for(;n<m;)t.insertBefore(i[n++],a);if(n==m)for(;n<c;)t.removeChild(e[n++]);else{for(r=e[n];n<m;)s=i[n++],o=r?r.nextSibling:a,r==s?r=o:n<m&&i[n]==o?(t.replaceChild(s,r),r=o):t.insertBefore(s,r);for(;r!=a;)o=r.nextSibling,t.removeChild(r),r=o}return i}function sr(t){return t?.split(/\s+/).map(lr)}function lr(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function dr(t){return t?.split(/\s+/).map(cr)}function cr(t){if(t){const[e,i,a,n]=t.split(":");return{id:e,kind:i,language:a,label:n}}}function ur(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function cn(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}var La={string:t=>String(t)},un=class{constructor(t){this.template=t,this.state=void 0}},ct=new WeakMap,ut=new WeakMap,bi={partial:(t,e)=>{e[t.expression]=new un(t.template)},if:(t,e)=>{var i;if(hn(t.expression,e))if(ct.get(t)!==t.template){ct.set(t,t.template);const a=new Qi(t.template,e,Xi);t.replace(a),ut.set(t,a)}else(i=ut.get(t))==null||i.update(e);else t.replace(""),ct.delete(t),ut.delete(t)}},hr=Object.keys(bi),Xi={processCallback(t,e,i){var a,n;if(i)for(const[r,o]of e){if(o instanceof dn){if(!o.directive){const m=hr.find(c=>o.template.hasAttribute(c));m&&(o.directive=m,o.expression=o.template.getAttribute(m))}(a=bi[o.directive])==null||a.call(bi,o,i);continue}let s=hn(r,i);if(s instanceof un){ct.get(o)!==s.template?(ct.set(o,s.template),s=new Qi(s.template,s.state,Xi),o.value=s,ut.set(o,s)):(n=ut.get(o))==null||n.update(s.state);continue}s?(o instanceof mt&&o.attributeName.startsWith("aria-")&&(s=String(s)),o instanceof mt?typeof s=="boolean"?o.booleanValue=s:typeof s=="function"?o.element[o.attributeName]=s:o.value=s:(o.value=s,ct.delete(o),ut.delete(o))):o instanceof mt?o.value=void 0:(o.value=void 0,ct.delete(o),ut.delete(o))}}},Ia={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=La[e])==null?void 0:i.call(La,t)}};function mr(t){return pr(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function hn(t,e={}){var i,a,n,r,o,s,m;const c=mr(t);if(c.length===0||c.some(({type:E})=>!E))return Ft(t);if(((i=c[0])==null?void 0:i.token)===">"){const E=e[(a=c[1])==null?void 0:a.token];if(!E)return Ft(t);const _={...e};E.state=_;const T=c.slice(2);for(let L=0;L<T.length;L+=3){const qt=(n=T[L])==null?void 0:n.token,me=(r=T[L+1])==null?void 0:r.token,zn=(o=T[L+2])==null?void 0:o.token;qt&&me==="="&&(_[qt]=zt(zn,e))}return E}if(c.length===1)return pe(c[0])?zt(c[0].token,e):Ft(t);if(c.length===2){const E=(s=c[0])==null?void 0:s.token,_=Ia[E];if(!_||!pe(c[1]))return Ft(t);const T=zt(c[1].token,e);return _(T)}if(c.length===3){const E=(m=c[1])==null?void 0:m.token,_=Ia[E];if(!_||!pe(c[0])||!pe(c[2]))return Ft(t);const T=zt(c[0].token,e);if(E==="|")return _(T,c[2].token);const L=zt(c[2].token,e);return _(T,L)}}function Ft(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function pe({type:t}){return["number","boolean","string","param"].includes(t)}function zt(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):cn(t)?parseFloat(t):e[t]}function pr(t,e){let i,a,n;const r=[];for(;t;){n=null,i=t.length;for(const o in e)a=e[o].exec(t),a&&a.index<i&&(n={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&r.push({token:t.substr(0,i),type:void 0}),n&&r.push(n),t=t.substr(i+(n?n.token.length:0))}return r}var Ji=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},z=(t,e,i)=>(Ji(t,e,"read from private field"),i?i.call(t):e.get(t)),nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},U=(t,e,i,a)=>(Ji(t,e,"write to private field"),e.set(t,i),i),di=(t,e,i)=>(Ji(t,e,"access private method"),i),Pt,Te,Ot,At,gi,mn,Ae,Ei,Jt,ci={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},pn=le.createElement("template");pn.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var ei=class extends d.HTMLElement{constructor(){super(),nt(this,gi),nt(this,Ae),nt(this,Pt,void 0),nt(this,Te,void 0),nt(this,Ot,void 0),nt(this,At,void 0),nt(this,Jt,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),U(this,At,new MutationObserver(t=>{var e;this.mediaController&&!((e=this.mediaController)!=null&&e.breakpointsComputed)||t.some(i=>{const a=i.target;return a===this?!0:a.localName!=="media-controller"?!1:!!(ci[i.attributeName]||i.attributeName.startsWith("breakpoint"))})&&this.render()})),U(this,Jt,this.render.bind(this)),di(this,gi,mn).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=z(this,Pt))!=null?t:this.constructor.template}set template(t){if(t===null){this.removeAttribute("template");return}typeof t=="string"?this.setAttribute("template",t):t instanceof HTMLTemplateElement&&(U(this,Pt,t),U(this,Ot,null),this.createRenderer())}get props(){var t,e,i;const a=[...Array.from((e=(t=this.mediaController)==null?void 0:t.attributes)!=null?e:[]).filter(({name:r})=>ci[r]||r.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const r of a){const o=(i=ci[r.name])!=null?i:ur(r.name);let{value:s}=r;s!=null?(cn(s)&&(s=parseFloat(s)),n[o]=s===""?!0:s):n[o]=!1}return n}attributeChangedCallback(t,e,i){t==="template"&&e!=i&&di(this,Ae,Ei).call(this)}connectedCallback(){this.addEventListener(Ze.BREAKPOINTS_COMPUTED,z(this,Jt)),z(this,At).observe(this,{attributes:!0}),z(this,At).observe(this.renderRoot,{attributes:!0,subtree:!0}),di(this,Ae,Ei).call(this)}disconnectedCallback(){this.removeEventListener(Ze.BREAKPOINTS_COMPUTED,z(this,Jt)),z(this,At).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==z(this,Te)&&(U(this,Te,this.template),this.renderer=new Qi(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(pn.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}};Pt=new WeakMap;Te=new WeakMap;Ot=new WeakMap;At=new WeakMap;gi=new WeakSet;mn=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Ae=new WeakSet;Ei=function(){var t;const e=this.getAttribute("template");if(!e||e===z(this,Ot))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){U(this,Ot,e),U(this,Pt,a),this.createRenderer();return}vr(e)&&(U(this,Ot,e),fr(e).then(n=>{const r=le.createElement("template");r.innerHTML=n,U(this,Pt,r),this.createRenderer()}).catch(console.error))};Jt=new WeakMap;ei.observedAttributes=["template"];ei.processor=Xi;function vr(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function fr(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",ei);function br({anchor:t,floating:e,placement:i}){const a=gr({anchor:t,floating:e}),{x:n,y:r}=kr(a,i);return{x:n,y:r}}function gr({anchor:t,floating:e}){return{anchor:Er(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function Er(t,e){var i;const a=t.getBoundingClientRect(),n=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-n.x,y:a.y-n.y,width:a.width,height:a.height}}function kr({anchor:t,floating:e},i){const a=_r(i)==="x"?"y":"x",n=a==="y"?"height":"width",r=vn(i),o=t.x+t.width/2-e.width/2,s=t.y+t.height/2-e.height/2,m=t[n]/2-e[n]/2;let c;switch(r){case"top":c={x:o,y:t.y-e.height};break;case"bottom":c={x:o,y:t.y+t.height};break;case"right":c={x:t.x+t.width,y:s};break;case"left":c={x:t.x-e.width,y:s};break;default:c={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":c[a]-=m;break;case"end":c[a]+=m;break}return c}function vn(t){return t.split("-")[0]}function _r(t){return["top","bottom"].includes(vn(t))?"y":"x"}var Ca=new WeakMap,ji=t=>{let e=Ca.get(t);return e||Ca.set(t,e=new Set),e},fn=new d.ResizeObserver(t=>{for(const e of t)for(const i of ji(e.target))i(e)});function $e(t,e){ji(t).add(e),fn.observe(t)}function Ve(t,e){const i=ji(t);i.delete(e),i.size||fn.unobserve(t)}var ta=class extends Event{constructor({action:t="auto",relatedTarget:e,...i}){super("invoke",i),this.action=t,this.relatedTarget=e}},yr=class extends Event{constructor({newState:t,oldState:e,...i}){super("toggle",i),this.newState=t,this.oldState=e}};function ii(t){const e={};for(const i of t)e[i.name]=i.value;return e}function y(t){var e;return(e=ki(t))!=null?e:ni(t,"media-controller")}function ki(t){var e;const{MEDIA_CONTROLLER:i}=J,a=t.getAttribute(i);if(a)return(e=ri(t))==null?void 0:e.getElementById(a)}var ai=(t,e)=>!t||!e?!1:t?.contains(e)?!0:ai(t,e.getRootNode().host),ni=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||ni(t.getRootNode().host,e)};function bn(t=document){var e;const i=t?.activeElement;return i?(e=bn(i.shadowRoot))!=null?e:i:null}function ri(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Tr(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let n=t;for(;n&&e>0;){const r=getComputedStyle(n);if(i&&r.opacity==="0"||a&&r.visibility==="hidden"||r.display==="none")return!1;n=n.parentElement,e--}return!0}function Ar(t,e){const i=wr(t,a=>a===e);return i||gn(t,e)}function wr(t,e){var i,a;let n;for(n of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let r;try{r=(a=n.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of r??[])if(e(o.selectorText))return o}}function gn(t,e){var i,a;const n=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],r=n?.[n.length-1];if(!r?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const o=r?.sheet.insertRule(`${e}{}`,r.sheet.cssRules.length);return(a=r.sheet.cssRules)==null?void 0:a[o]}function ft(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function $t(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}ft(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function _i(t,e){return t.hasAttribute(e)}function Ra(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}_i(t,e)!=i&&t.toggleAttribute(e,i)}function V(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function et(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;V(t,e,void 0)!==a&&t.setAttribute(e,a)}var ea=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},h=(t,e,i)=>(ea(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},w=(t,e,i,a)=>(ea(t,e,"write to private field"),e.set(t,i),i),v=(t,e,i)=>(ea(t,e,"access private method"),i),C,tt,$,we,jt,pt,de,yi,En,Ke,ia,Ge,Se,Ti,Ai,kn,wi,_n,Si,yn,Nt,Wt,Ut,ce,qe,aa,Mi,Tn,na,An,xi,wn,ra,Sn,Li,Mn,Ii,xn,ne,Fe,Ci,Ln,re,ze,Me,Ri;function Vt({type:t,text:e,value:i,checked:a}){const n=le.createElement("media-chrome-menu-item");n.type=t,n.part.add("menu-item"),n.part.add(t),n.value=i,n.checked=a;const r=le.createElement("span");return r.textContent=e,n.append(r),n}function vt(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function Sr(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var rt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},M=class extends d.HTMLElement{constructor(){if(super(),p(this,yi),p(this,Ke),p(this,Se),p(this,Ai),p(this,wi),p(this,Si),p(this,Ut),p(this,qe),p(this,Mi),p(this,na),p(this,xi),p(this,ra),p(this,Li),p(this,Ii),p(this,ne),p(this,Ci),p(this,re),p(this,Me),p(this,C,null),p(this,tt,null),p(this,$,null),p(this,we,new Set),p(this,jt,void 0),p(this,pt,!1),p(this,de,null),p(this,Ge,()=>{const t=h(this,we),e=new Set(this.items);for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));w(this,we,e)}),p(this,Nt,()=>{v(this,Ut,ce).call(this),v(this,qe,aa).call(this,!1)}),p(this,Wt,()=>{v(this,Ut,ce).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),w(this,jt,new MutationObserver(h(this,Ge)))}static get observedAttributes(){return[rt.DISABLED,rt.HIDDEN,rt.STYLE,rt.ANCHOR,J.MEDIA_CONTROLLER]}static formatMenuItemText(t,e){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":v(this,yi,En).call(this,t);break;case"invoke":v(this,Ai,kn).call(this,t);break;case"click":v(this,Mi,Tn).call(this,t);break;case"toggle":v(this,xi,wn).call(this,t);break;case"focusout":v(this,Li,Mn).call(this,t);break;case"keydown":v(this,Ii,xn).call(this,t);break}}connectedCallback(){var t,e;h(this,jt).observe(this.defaultSlot,{childList:!0}),w(this,de,gn(this.shadowRoot,":host")),v(this,Se,Ti).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),w(this,C,ki(this)),(e=(t=h(this,C))==null?void 0:t.associateElement)==null||e.call(t,this),this.hidden||($e(ue(this),h(this,Nt)),$e(this,h(this,Wt))),v(this,Ke,ia).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var t,e;h(this,jt).disconnect(),Ve(ue(this),h(this,Nt)),Ve(this,h(this,Wt)),this.disable(),(e=(t=h(this,C))==null?void 0:t.unassociateElement)==null||e.call(t,this),w(this,C,null),w(this,tt,null),w(this,$,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(t,e,i){var a,n,r,o;t===rt.HIDDEN&&i!==e?(h(this,pt)||w(this,pt,!0),this.hidden?v(this,Si,yn).call(this):v(this,wi,_n).call(this),this.dispatchEvent(new yr({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===J.MEDIA_CONTROLLER?(e&&((n=(a=h(this,C))==null?void 0:a.unassociateElement)==null||n.call(a,this),w(this,C,null)),i&&this.isConnected&&(w(this,C,ki(this)),(o=(r=h(this,C))==null?void 0:r.associateElement)==null||o.call(r,this))):t===rt.DISABLED&&i!==e?i==null?this.enable():this.disable():t===rt.STYLE&&i!==e&&v(this,Se,Ti).call(this)}formatMenuItemText(t,e){return this.constructor.formatMenuItemText(t,e)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=ri(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Mr)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,e;return(e=(t=this.checkedItems[0])==null?void 0:t.value)!=null?e:""}set value(t){const e=this.items.find(i=>i.value===t);e&&v(this,Me,Ri).call(this,e)}focus(){if(w(this,tt,bn()),this.items.length){v(this,re,ze).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t?.focus()}handleSelect(t){var e;const i=v(this,ne,Fe).call(this,t);i&&(v(this,Me,Ri).call(this,i,i.type==="checkbox"),h(this,$)&&!this.hidden&&((e=h(this,tt))==null||e.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var e,i;const{key:a}=t,n=this.items,r=(i=(e=v(this,ne,Fe).call(this,t))!=null?e:v(this,Ci,Ln).call(this))!=null?i:n[0],o=n.indexOf(r);let s=Math.max(0,o);a==="ArrowDown"?s++:a==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=n.length-1),s<0&&(s=n.length-1),s>n.length-1&&(s=0),v(this,re,ze).call(this,n[s]),n[s].focus()}};C=new WeakMap;tt=new WeakMap;$=new WeakMap;we=new WeakMap;jt=new WeakMap;pt=new WeakMap;de=new WeakMap;yi=new WeakSet;En=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&v(this,Ke,ia).call(this),e.name||h(this,Ge).call(this)};Ke=new WeakSet;ia=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};Ge=new WeakMap;Se=new WeakSet;Ti=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Ai=new WeakSet;kn=function(t){w(this,$,t.relatedTarget),ai(this,t.relatedTarget)||(this.hidden=!this.hidden)};wi=new WeakSet;_n=function(){var t;(t=h(this,$))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),$e(ue(this),h(this,Nt)),$e(this,h(this,Wt))};Si=new WeakSet;yn=function(){var t;(t=h(this,$))==null||t.setAttribute("aria-expanded","false"),Ve(ue(this),h(this,Nt)),Ve(this,h(this,Wt))};Nt=new WeakMap;Wt=new WeakMap;Ut=new WeakSet;ce=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=br({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const n=ue(this).getBoundingClientRect(),r=n.width-e-t,o=n.height-i-this.offsetHeight,{style:s}=h(this,de);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${o}px`);const m=getComputedStyle(this),E=s.getPropertyValue("--_menu-bottom")===m.bottom?o:parseFloat(m.bottom),_=n.height-E-parseFloat(m.marginBottom);this.style.setProperty("--_menu-max-height",`${_}px`)};qe=new WeakSet;aa=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=h(this,de);if(t||a.setProperty("--media-menu-transition-in","none"),i){const n=i.offsetHeight,r=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${n}px`),v(this,Ut,ce).call(this,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),v(this,Ut,ce).call(this);a.removeProperty("--media-menu-transition-in")};Mi=new WeakSet;Tn=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(h(this,na,An))){(e=h(this,tt))==null||e.focus(),this.hidden=!0;return}const i=v(this,ne,Fe).call(this,t);!i||i.hasAttribute("disabled")||(v(this,re,ze).call(this,i),this.handleSelect(t))};na=new WeakSet;An=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};xi=new WeakSet;wn=function(t){if(t.target===this)return;v(this,ra,Sn).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new ta({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);v(this,qe,aa).call(this,!0)};ra=new WeakSet;Sn=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Li=new WeakSet;Mn=function(t){var e;ai(this,t.relatedTarget)||(h(this,pt)&&((e=h(this,tt))==null||e.focus()),h(this,$)&&h(this,$)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Ii=new WeakSet;xn=function(t){var e,i,a,n,r;const{key:o,ctrlKey:s,altKey:m,metaKey:c}=t;if(!(s||m||c)&&this.keysUsed.includes(o))if(t.preventDefault(),t.stopPropagation(),o==="Tab"){if(h(this,pt)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(n=(a=this.nextElementSibling)==null?void 0:a.focus)==null||n.call(a),this.blur()}else o==="Escape"?((r=h(this,tt))==null||r.focus(),h(this,pt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(t):this.handleMove(t)};ne=new WeakSet;Fe=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};Ci=new WeakSet;Ln=function(){return this.items.find(t=>t.tabIndex===0)};re=new WeakSet;ze=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Me=new WeakSet;Ri=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,n)=>a!=i[n])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};M.shadowRootOptions={mode:"open"};M.getTemplateHTML=Sr;function Mr(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function ue(t){var e;return(e=t.getAttribute("bounds")?ni(t,`#${t.getAttribute("bounds")}`):y(t)||t.parentElement)!=null?e:t}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",M);var oa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},k=(t,e,i)=>(oa(t,e,"read from private field"),i?i.call(t):e.get(t)),O=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ui=(t,e,i,a)=>(oa(t,e,"write to private field"),e.set(t,i),i),Rt=(t,e,i)=>(oa(t,e,"access private method"),i),xe,oe,Di,In,Ye,sa,la,Cn,P,wt,Bi,Le,Hi;function xr(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function Lr(t){return""}var A={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},at=class extends d.HTMLElement{constructor(){if(super(),O(this,Di),O(this,Ye),O(this,la),O(this,Le),O(this,xe,!1),O(this,oe,void 0),O(this,P,()=>{var t,e;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(e=a?.dataset.description)!=null?e:a?.text,r=le.createElement("span");r.textContent=n??"",i.replaceChildren(r)}),O(this,wt,t=>{const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",k(this,wt));return}this.handleClick(t)}),O(this,Bi,t=>{const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",k(this,wt));return}this.addEventListener("keyup",k(this,wt),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[A.TYPE,A.DISABLED,A.CHECKED,A.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Yt(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":Rt(this,Di,In).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":k(this,Bi).call(this,t);break;case"keyup":k(this,wt).call(this,t);break}}attributeChangedCallback(t,e,i){t===A.CHECKED&&Yt(this)&&!k(this,xe)?this.setAttribute("aria-checked",i!=null?"true":"false"):t===A.TYPE&&i!==e?this.role="menuitem"+i:t===A.DISABLED&&i!==e&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(A.DISABLED)||this.enable(),this.role="menuitem"+this.type,ui(this,oe,Pi(this,this.parentNode)),Rt(this,Le,Hi).call(this),this.submenuElement&&Rt(this,Ye,sa).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),Rt(this,Le,Hi).call(this),ui(this,oe,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=ri(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(A.TYPE))!=null?t:""}set type(t){this.setAttribute(A.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(A.VALUE))!=null?t:this.text}set value(t){this.setAttribute(A.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(Yt(this))return this.getAttribute("aria-checked")==="true"}set checked(t){Yt(this)&&(ui(this,xe,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){Yt(this)||this.invokeTargetElement&&ai(this,t.target)&&this.invokeTargetElement.dispatchEvent(new ta({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};xe=new WeakMap;oe=new WeakMap;Di=new WeakSet;In=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?Rt(this,Ye,sa).call(this):Rt(this,la,Cn).call(this))};Ye=new WeakSet;sa=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",k(this,P)),this.submenuElement.addEventListener("addmenuitem",k(this,P)),this.submenuElement.addEventListener("removemenuitem",k(this,P)),k(this,P).call(this)};la=new WeakSet;Cn=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",k(this,P)),this.submenuElement.removeEventListener("addmenuitem",k(this,P)),this.submenuElement.removeEventListener("removemenuitem",k(this,P)),k(this,P).call(this)};P=new WeakMap;wt=new WeakMap;Bi=new WeakMap;Le=new WeakSet;Hi=function(){var t;const e=(t=k(this,oe))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};at.shadowRootOptions={mode:"open"};at.getTemplateHTML=xr;at.getSuffixSlotInnerHTML=Lr;function Yt(t){return t.type==="radio"||t.type==="checkbox"}function Pi(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Pi(t,i):e?.items?e:Pi(e,e?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",at);function Ir(t){return`
    ${M.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var Rn=class extends M{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-settings-menu-button")}};Rn.getTemplateHTML=Ir;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",Rn);function Cr(t){return`
    ${at.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Rr(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var oi=class extends at{};oi.shadowRootOptions={mode:"open"};oi.getTemplateHTML=Cr;oi.getSuffixSlotInnerHTML=Rr;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",oi);var gt={PLACEMENT:"placement",BOUNDS:"bounds"};function Dr(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var si=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var t;if(!Tr(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const e=this.placement;if(e==="left"||e==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(t=ni(this,"#"+this.bounds))!=null?t:y(this);if(!a)return;const{x:n,width:r}=a.getBoundingClientRect(),{x:o,width:s}=this.getBoundingClientRect(),m=o+s,c=n+r,E=i.getPropertyValue("--media-tooltip-offset-x"),_=E?parseFloat(E.replace("px","")):0,T=i.getPropertyValue("--media-tooltip-container-margin"),L=T?parseFloat(T.replace("px","")):0,qt=o-n+_-L,me=m-c+_+L;if(qt<0){this.style.setProperty("--media-tooltip-offset-x",`${qt}px`);return}if(me>0){this.style.setProperty("--media-tooltip-offset-x",`${me}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const t=this.placement;delete this.placement,this.placement=t}}static get observedAttributes(){return[gt.PLACEMENT,gt.BOUNDS]}get placement(){return V(this,gt.PLACEMENT)}set placement(t){et(this,gt.PLACEMENT,t)}get bounds(){return V(this,gt.BOUNDS)}set bounds(t){et(this,gt.BOUNDS,t)}};si.shadowRootOptions={mode:"open"};si.getTemplateHTML=Dr;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",si);var Da=si,da=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},f=(t,e,i)=>(da(t,e,"read from private field"),i?i.call(t):e.get(t)),ot=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ve=(t,e,i,a)=>(da(t,e,"write to private field"),e.set(t,i),i),Ba=(t,e,i)=>(da(t,e,"access private method"),i),R,Dt,Oi,Dn,j,St,Ie,Ni,Bn,K={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Br(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Da.shadowRootOptions.mode}">
          ${Da.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Hr(t,e){return`
    <slot></slot>
  `}function Pr(){return""}var bt=class extends d.HTMLElement{constructor(){if(super(),ot(this,Oi),ot(this,Ni),ot(this,R,void 0),this.preventClick=!1,this.tooltipEl=null,ot(this,Dt,t=>{this.preventClick||this.handleClick(t),setTimeout(f(this,j),0)}),ot(this,j,()=>{var t,e;(e=(t=this.tooltipEl)==null?void 0:t.updateXOffset)==null||e.call(t)}),ot(this,St,t=>{const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",f(this,St));return}this.preventClick||this.handleClick(t)}),ot(this,Ie,t=>{const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",f(this,St));return}this.addEventListener("keyup",f(this,St),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ii(this.attributes),e=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(e):this.shadowRoot.innerHTML=e}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",K.TOOLTIP_PLACEMENT,J.MEDIA_CONTROLLER,l.MEDIA_LANG]}enable(){this.addEventListener("click",f(this,Dt)),this.addEventListener("keydown",f(this,Ie)),this.tabIndex=0}disable(){this.removeEventListener("click",f(this,Dt)),this.removeEventListener("keydown",f(this,Ie)),this.removeEventListener("keyup",f(this,St)),this.tabIndex=-1}attributeChangedCallback(t,e,i){var a,n,r,o,s;t===J.MEDIA_CONTROLLER?(e&&((n=(a=f(this,R))==null?void 0:a.unassociateElement)==null||n.call(a,this),ve(this,R,null)),i&&this.isConnected&&(ve(this,R,(r=this.getRootNode())==null?void 0:r.getElementById(i)),(s=(o=f(this,R))==null?void 0:o.associateElement)==null||s.call(o,this))):t==="disabled"&&i!==e?i==null?this.enable():this.disable():t===K.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==e?this.tooltipEl.placement=i:t===l.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Ba(this,Oi,Dn).call(this)&&f(this,j).call(this)}connectedCallback(){var t,e,i;const{style:a}=Ar(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(J.MEDIA_CONTROLLER);n&&(ve(this,R,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(i=(e=f(this,R))==null?void 0:e.associateElement)==null||i.call(e,this)),d.customElements.whenDefined("media-tooltip").then(()=>Ba(this,Ni,Bn).call(this))}disconnectedCallback(){var t,e;this.disable(),(e=(t=f(this,R))==null?void 0:t.unassociateElement)==null||e.call(t,this),ve(this,R,null),this.removeEventListener("mouseenter",f(this,j)),this.removeEventListener("focus",f(this,j)),this.removeEventListener("click",f(this,Dt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return V(this,K.TOOLTIP_PLACEMENT)}set tooltipPlacement(t){et(this,K.TOOLTIP_PLACEMENT,t)}get mediaController(){return V(this,J.MEDIA_CONTROLLER)}set mediaController(t){et(this,J.MEDIA_CONTROLLER,t)}get disabled(){return _i(this,K.DISABLED)}set disabled(t){Ra(this,K.DISABLED,t)}get noTooltip(){return _i(this,K.NO_TOOLTIP)}set noTooltip(t){Ra(this,K.NO_TOOLTIP,t)}handleClick(t){}};R=new WeakMap;Dt=new WeakMap;Oi=new WeakSet;Dn=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};j=new WeakMap;St=new WeakMap;Ie=new WeakMap;Ni=new WeakSet;Bn=function(){this.addEventListener("mouseenter",f(this,j)),this.addEventListener("focus",f(this,j)),this.addEventListener("click",f(this,Dt));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};bt.shadowRootOptions={mode:"open"};bt.getTemplateHTML=Br;bt.getSlotTemplateHTML=Hr;bt.getTooltipContentHTML=Pr;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",bt);var Gt=class extends bt{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=ri(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new ta({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",Gt);var Or={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."},Ha,hi={en:Or},Pa=((Ha=globalThis.navigator)==null?void 0:Ha.language)||"en",Nr=t=>{var e,i,a;const[n]=Pa.split("-");return((e=hi[Pa])==null?void 0:e[t])||((i=hi[n])==null?void 0:i[t])||((a=hi.en)==null?void 0:a[t])||t},g=(t,e={})=>Nr(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);function Wr(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function Ur(){return g("Settings")}var ca=class extends Gt{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-settings-menu")}};ca.getSlotTemplateHTML=Wr;ca.getTooltipContentHTML=Ur;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",ca);var ua=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Hn=(t,e,i)=>(ua(t,e,"read from private field"),i?i.call(t):e.get(t)),fe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wi=(t,e,i,a)=>(ua(t,e,"write to private field"),e.set(t,i),i),be=(t,e,i)=>(ua(t,e,"access private method"),i),te,Qe,Ce,Ui,Re,Zi,Zr=class extends M{constructor(){super(...arguments),fe(this,Ce),fe(this,Re),fe(this,te,[]),fe(this,Qe,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_AUDIO_TRACK_ENABLED&&e!==i?this.value=i:t===l.MEDIA_AUDIO_TRACK_LIST&&e!==i&&(Wi(this,te,dr(i??"")),be(this,Ce,Ui).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",be(this,Re,Zi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",be(this,Re,Zi))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=y(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Hn(this,te)}set mediaAudioTrackList(t){Wi(this,te,t),be(this,Ce,Ui).call(this)}get mediaAudioTrackEnabled(){var t;return(t=V(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){et(this,l.MEDIA_AUDIO_TRACK_ENABLED,t)}};te=new WeakMap;Qe=new WeakMap;Ce=new WeakSet;Ui=function(){if(Hn(this,Qe)===JSON.stringify(this.mediaAudioTrackList))return;Wi(this,Qe,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Vt({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(vt(this,"checked-indicator")),this.defaultSlot.append(a)}};Re=new WeakSet;Zi=function(){if(this.value==null)return;const t=new d.CustomEvent(Zt.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",Zr);var $r=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function Vr(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${$r}</slot>
  `}function Kr(){return g("Audio")}var Oa=t=>{const e=g("Audio");t.setAttribute("aria-label",e)},ha=class extends Gt{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Oa(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_LANG&&Oa(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=y(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=V(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){et(this,l.MEDIA_AUDIO_TRACK_ENABLED,t)}};ha.getSlotTemplateHTML=Vr;ha.getTooltipContentHTML=Kr;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",ha);var Gr=(t="")=>t.split(/\s+/),qr=(t="")=>{const[e,i,a]=t.split(":"),n=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Ta.CAPTIONS:Ta.SUBTITLES,language:i,label:n}},Pn=(t="",e={})=>Gr(t).map(i=>{const a=qr(i);return{...e,...a}}),$i=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,On=(t=[])=>Array.prototype.map.call(t,$i).join(" "),Fr=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(l.MEDIA_SUBTITLES_SHOWING)},ma=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},zr=(t,e,i)=>(ma(t,e,"read from private field"),e.get(t)),mi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yr=(t,e,i,a)=>(ma(t,e,"write to private field"),e.set(t,i),i),ge=(t,e,i)=>(ma(t,e,"access private method"),i),Xe,De,Vi,Be,Ki,Qr=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Xr(t){return`
    ${M.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${Qr}</slot>
  `}var Nn=class extends M{constructor(){super(...arguments),mi(this,De),mi(this,Be),mi(this,Xe,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_SUBTITLES_LIST&&e!==i?ge(this,De,Vi).call(this):t===l.MEDIA_SUBTITLES_SHOWING&&e!==i&&(this.value=i||"",ge(this,De,Vi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ge(this,Be,Ki))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ge(this,Be,Ki))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Na(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Wa(this,l.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Na(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Wa(this,l.MEDIA_SUBTITLES_SHOWING,t)}};Xe=new WeakMap;De=new WeakSet;Vi=function(){var t;const e=zr(this,Xe)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(l.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;Yr(this,Xe,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,n=Vt({type:"radio",text:this.formatMenuItemText(g("Off")),value:"off",checked:a});n.prepend(vt(this,"checked-indicator")),this.defaultSlot.append(n);const r=this.mediaSubtitlesList;for(const o of r){const s=Vt({type:"radio",text:this.formatMenuItemText(o.label,o),value:$i(o),checked:this.value==$i(o)});s.prepend(vt(this,"checked-indicator")),((t=o.kind)!=null?t:"subs")==="captions"&&s.append(vt(this,"captions-indicator")),this.defaultSlot.append(s)}};Be=new WeakSet;Ki=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(l.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new d.CustomEvent(Zt.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new d.CustomEvent(Zt.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Nn.getTemplateHTML=Xr;var Na=(t,e)=>{const i=t.getAttribute(e);return i?Pn(i):[]},Wa=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=On(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",Nn);var Jr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,jr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function to(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Jr}</slot>
      <slot name="off">${jr}</slot>
    </slot>
  `}function eo(){return g("Captions")}var Ua=t=>{t.setAttribute("data-captions-enabled",Fr(t).toString())},Za=t=>{t.setAttribute("aria-label",g("closed captions"))},pa=class extends Gt{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING,l.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Za(this),Ua(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_SUBTITLES_SHOWING?Ua(this):t===l.MEDIA_LANG&&Za(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=y(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return $a(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Va(this,l.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return $a(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Va(this,l.MEDIA_SUBTITLES_SHOWING,t)}};pa.getSlotTemplateHTML=to;pa.getTooltipContentHTML=eo;var $a=(t,e)=>{const i=t.getAttribute(e);return i?Pn(i):[]},Va=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=On(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",pa);var Wn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},b=(t,e,i)=>(Wn(t,e,"read from private field"),i?i.call(t):e.get(t)),Qt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ee=(t,e,i,a)=>(Wn(t,e,"write to private field"),e.set(t,i),i),Mt,xt,Je,ht,N,Y,Un=class{constructor(t,e,{defaultValue:i}={defaultValue:void 0}){Qt(this,N),Qt(this,Mt,void 0),Qt(this,xt,void 0),Qt(this,Je,void 0),Qt(this,ht,new Set),Ee(this,Mt,t),Ee(this,xt,e),Ee(this,Je,new Set(i))}[Symbol.iterator](){return b(this,N,Y).values()}get length(){return b(this,N,Y).size}get value(){var t;return(t=[...b(this,N,Y)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(Ee(this,ht,new Set),this.add(...(e=t?.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...b(this,N,Y)][t]}values(){return b(this,N,Y).values()}forEach(t,e){b(this,N,Y).forEach(t,e)}add(...t){var e,i;t.forEach(a=>b(this,ht).add(a)),!(this.value===""&&!((e=b(this,Mt))!=null&&e.hasAttribute(`${b(this,xt)}`)))&&((i=b(this,Mt))==null||i.setAttribute(`${b(this,xt)}`,`${this.value}`))}remove(...t){var e;t.forEach(i=>b(this,ht).delete(i)),(e=b(this,Mt))==null||e.setAttribute(`${b(this,xt)}`,`${this.value}`)}contains(t){return b(this,N,Y).has(t)}toggle(t,e){return typeof e<"u"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};Mt=new WeakMap;xt=new WeakMap;Je=new WeakMap;ht=new WeakMap;N=new WeakSet;Y=function(){return b(this,ht).size?b(this,ht):b(this,Je)};var io=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Et=(t,e,i)=>(io(t,e,"read from private field"),i?i.call(t):e.get(t)),ao=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Q,pi={RATES:"rates"},Zn=[1,1.2,1.5,1.7,2],Bt=1;function it(t){return Math.round(t*100)/100}function no(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?it(+t.mediaplaybackrate):Bt}x</slot>
  `}function ro(){return g("Playback rate")}var va=class extends bt{constructor(){var t;super(),ao(this,Q,new Un(this,pi.RATES,{defaultValue:Zn})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${it((t=this.mediaPlaybackRate)!=null?t:Bt)}x`}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,pi.RATES]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t===pi.RATES&&(Et(this,Q).value=i),t===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,n=it(Number.isNaN(a)?Bt:a);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Et(this,Q)}set rates(t){t?Array.isArray(t)?Et(this,Q).value=t.join(" "):typeof t=="string"&&(Et(this,Q).value=t):Et(this,Q).value=""}get mediaPlaybackRate(){return ft(this,l.MEDIA_PLAYBACK_RATE,Bt)}set mediaPlaybackRate(t){$t(this,l.MEDIA_PLAYBACK_RATE,t)}handleClick(){var t,e;const i=Array.from(Et(this,Q).values(),r=>+r).sort((r,o)=>r-o),a=(e=(t=i.find(r=>r>this.mediaPlaybackRate))!=null?t:i[0])!=null?e:Bt,n=new d.CustomEvent(Zt.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(n)}};Q=new WeakMap;va.getSlotTemplateHTML=no;va.getTooltipContentHTML=ro;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",va);var $n=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Lt=(t,e,i)=>($n(t,e,"read from private field"),i?i.call(t):e.get(t)),vi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},kt=(t,e,i)=>($n(t,e,"access private method"),i),X,It,ee,He,Gi,fi={RATES:"rates"},oo=class extends M{constructor(){super(),vi(this,It),vi(this,He),vi(this,X,new Un(this,fi.RATES,{defaultValue:Zn})),kt(this,It,ee).call(this)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,fi.RATES]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_PLAYBACK_RATE&&e!=i?(this.value=i,kt(this,It,ee).call(this)):t===fi.RATES&&e!=i&&(Lt(this,X).value=i,kt(this,It,ee).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",kt(this,He,Gi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",kt(this,He,Gi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-playback-rate-menu-button")}get rates(){return Lt(this,X)}set rates(t){t?Array.isArray(t)?Lt(this,X).value=t.join(" "):typeof t=="string"&&(Lt(this,X).value=t):Lt(this,X).value="",kt(this,It,ee).call(this)}get mediaPlaybackRate(){return ft(this,l.MEDIA_PLAYBACK_RATE,Bt)}set mediaPlaybackRate(t){$t(this,l.MEDIA_PLAYBACK_RATE,t)}};X=new WeakMap;It=new WeakSet;ee=function(){this.defaultSlot.textContent="";const t=it(this.mediaPlaybackRate),e=new Set(Array.from(Lt(this,X)).map(a=>it(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,n)=>a-n);for(const a of i){const n=Vt({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});n.prepend(vt(this,"checked-indicator")),this.defaultSlot.append(n)}};He=new WeakSet;Gi=function(){if(!this.value)return;const t=new d.CustomEvent(Zt.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",oo);var Pe=1;function so(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?it(+t.mediaplaybackrate):Pe}x</slot>
  `}function lo(){return g("Playback rate")}var fa=class extends Gt{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${it((t=this.mediaPlaybackRate)!=null?t:Pe)}x`}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,n=it(Number.isNaN(a)?Pe:a);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ft(this,l.MEDIA_PLAYBACK_RATE,Pe)}set mediaPlaybackRate(t){$t(this,l.MEDIA_PLAYBACK_RATE,t)}};fa.getSlotTemplateHTML=so;fa.getTooltipContentHTML=lo;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",fa);var ba=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},W=(t,e,i)=>(ba(t,e,"read from private field"),i?i.call(t):e.get(t)),ke=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ka=(t,e,i,a)=>(ba(t,e,"write to private field"),e.set(t,i),i),_t=(t,e,i)=>(ba(t,e,"access private method"),i),ie,D,Ct,ae,Oe,qi,co=class extends M{constructor(){super(...arguments),ke(this,Ct),ke(this,Oe),ke(this,ie,[]),ke(this,D,{})}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_LIST,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT,l.MEDIA_WIDTH]}static formatMenuItemText(t,e){return super.formatMenuItemText(t,e)}static formatRendition(t,{showBitrate:e=!1}={}){const i=`${Math.min(t.width,t.height)}p`;if(e&&t.bitrate){const a=t.bitrate/1e6,n=`${a.toFixed(a<1?1:0)} Mbps`;return`${i} (${n})`}return this.formatMenuItemText(i,t)}static compareRendition(t,e){var i,a;return e.height===t.height?((i=e.bitrate)!=null?i:0)-((a=t.bitrate)!=null?a:0):e.height-t.height}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),e!==i)switch(t){case l.MEDIA_RENDITION_SELECTED:this.value=i??"auto",_t(this,Ct,ae).call(this);break;case l.MEDIA_RENDITION_LIST:Ka(this,ie,sr(i)),_t(this,Ct,ae).call(this);break;case l.MEDIA_HEIGHT:case l.MEDIA_WIDTH:_t(this,Ct,ae).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",_t(this,Oe,qi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",_t(this,Oe,qi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return W(this,ie)}set mediaRenditionList(t){Ka(this,ie,t),_t(this,Ct,ae).call(this)}get mediaRenditionSelected(){return V(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){et(this,l.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return ft(this,l.MEDIA_HEIGHT)}set mediaHeight(t){$t(this,l.MEDIA_HEIGHT,t)}get mediaWidth(){return ft(this,l.MEDIA_WIDTH)}set mediaWidth(t){$t(this,l.MEDIA_WIDTH,t)}compareRendition(t,e){return this.constructor.compareRendition(t,e)}formatMenuItemText(t,e){return this.constructor.formatMenuItemText(t,e)}formatRendition(t,e){return this.constructor.formatRendition(t,e)}showRenditionBitrate(t){return this.mediaRenditionList.some(e=>e!==t&&e.height===t.height&&e.bitrate!==t.bitrate)}};ie=new WeakMap;D=new WeakMap;Ct=new WeakSet;ae=function(){const t=!this.mediaRenditionSelected;if(W(this,D).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&W(this,D).mediaHeight===this.mediaHeight&&W(this,D).mediaWidth===this.mediaWidth&&W(this,D).isAuto===t)return;W(this,D).mediaRenditionList=JSON.stringify(this.mediaRenditionList),W(this,D).mediaHeight=this.mediaHeight,W(this,D).mediaWidth=this.mediaWidth,W(this,D).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(o=>o.id===this.mediaRenditionSelected);for(const o of e)o.selected=o===i;this.defaultSlot.textContent="";for(const o of e){const s=this.formatRendition(o,{showBitrate:this.showRenditionBitrate(o)}),m=Vt({type:"radio",text:s,value:`${o.id}`,checked:o.selected&&!t});m.prepend(vt(this,"checked-indicator")),this.defaultSlot.append(m)}const a=i&&this.showRenditionBitrate(i);let n;t&&(i?n=this.formatMenuItemText(`${g("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(n=this.formatMenuItemText(`${g("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),n||(n=this.formatMenuItemText(g("Auto")));const r=Vt({type:"radio",text:n,value:"auto",checked:t});r.dataset.description=n,r.prepend(vt(this,"checked-indicator")),this.defaultSlot.append(r)};Oe=new WeakSet;qi=function(){if(this.value==null)return;const t=new d.CustomEvent(Zt.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",co);var uo=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function ho(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uo}</slot>
  `}function mo(){return g("Quality")}var ga=class extends Gt{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return V(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){et(this,l.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return ft(this,l.MEDIA_HEIGHT)}set mediaHeight(t){$t(this,l.MEDIA_HEIGHT,t)}};ga.getSlotTemplateHTML=ho;ga.getTooltipContentHTML=mo;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",ga);var Ea=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},B=(t,e,i)=>(Ea(t,e,"read from private field"),i?i.call(t):e.get(t)),I=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vn=(t,e,i,a)=>(Ea(t,e,"write to private field"),e.set(t,i),i),S=(t,e,i)=>(Ea(t,e,"access private method"),i),Kt,he,li,dt,Ht,ka,Kn,Ne,Fi,We,zi,Gn,je,ti,Ue;function po(t){return`
      ${M.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var qn=class extends M{constructor(){super(),I(this,he),I(this,dt),I(this,ka),I(this,Ne),I(this,zi),I(this,Kt,!1),I(this,We,t=>{const e=t.target,i=e?.nodeName==="VIDEO",a=S(this,Ne,Fi).call(this,e);(i||a)&&(B(this,Kt)?S(this,dt,Ht).call(this):S(this,zi,Gn).call(this,t))}),I(this,je,t=>{const e=t.target,i=this.contains(e),a=t.button===2,n=e?.nodeName==="VIDEO",r=S(this,Ne,Fi).call(this,e);i||a&&(n||r)||S(this,dt,Ht).call(this)}),I(this,ti,t=>{t.key==="Escape"&&S(this,dt,Ht).call(this)}),I(this,Ue,t=>{var e,i;const a=t.target;if((e=a.matches)!=null&&e.call(a,'button[invoke="copy"]')){const n=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}S(this,dt,Ht).call(this)}),this.setAttribute("noautohide",""),S(this,he,li).call(this)}connectedCallback(){super.connectedCallback(),y(this).addEventListener("contextmenu",B(this,We)),this.addEventListener("click",B(this,Ue))}disconnectedCallback(){super.disconnectedCallback(),y(this).removeEventListener("contextmenu",B(this,We)),this.removeEventListener("click",B(this,Ue)),document.removeEventListener("mousedown",B(this,je)),document.removeEventListener("keydown",B(this,ti))}};Kt=new WeakMap;he=new WeakSet;li=function(){this.hidden=!B(this,Kt)};dt=new WeakSet;Ht=function(){Vn(this,Kt,!1),S(this,he,li).call(this)};ka=new WeakSet;Kn=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&S(i=e,dt,Ht).call(i)})};Ne=new WeakSet;Fi=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};We=new WeakMap;zi=new WeakSet;Gn=function(t){t.preventDefault(),S(this,ka,Kn).call(this),Vn(this,Kt,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,S(this,he,li).call(this),document.addEventListener("mousedown",B(this,je),{once:!0}),document.addEventListener("keydown",B(this,ti),{once:!0})};je=new WeakMap;ti=new WeakMap;Ue=new WeakMap;qn.getTemplateHTML=po;d.customElements.get("media-context-menu")||d.customElements.define("media-context-menu",qn);function vo(t){return`
    ${at.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var _a=class extends at{};_a.shadowRootOptions={mode:"open"};_a.getTemplateHTML=vo;d.customElements.get("media-context-menu-item")||d.customElements.define("media-context-menu-item",_a);var Yi=Jn.createElement("template");"innerHTML"in Yi&&(Yi.innerHTML=Yn);var Ga,qa,Fn=class extends ei{};Fn.template=(qa=(Ga=Yi.content)==null?void 0:Ga.children)==null?void 0:qa[0];ya.customElements.get("media-theme-classic")||ya.customElements.define("media-theme-classic",Fn);
