var Yn=`<template id="media-theme-news">
  <style>
    media-controller {
      font-size: 13px;
      font-family: Roboto, Arial, sans-serif;
      --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      --media-secondary-color: transparent;
      --media-menu-background: rgba(28, 28, 28, 0.9);
      --media-control-hover-background: var(--media-secondary-color);
      --media-range-track-height: 3px;
      --media-range-thumb-height: 13px;
      --media-range-thumb-width: 13px;
      --media-range-thumb-border-radius: 13px;
      --media-preview-thumbnail-border: 2px solid #fff;
      --media-preview-thumbnail-border-radius: 2px;
      --media-tooltip-display: none;
    }

    /* The biggest size controller is tied to going fullscreen
      instead of a player width */
    media-controller[mediaisfullscreen] {
      font-size: 17px;
      --media-range-thumb-height: 20px;
      --media-range-thumb-width: 20px;
      --media-range-thumb-border-radius: 10px;
      --media-range-track-height: 4px;
    }

    .nw-button {
      position: relative;
      display: inline-block;
      width: 36px;
      padding: 0 2px;
      height: 100%;
      opacity: 0.9;
      transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
    }
    [breakpointmd] .nw-button {
      width: 48px;
    }
    [mediaisfullscreen] .nw-button {
      width: 54px;
    }

    .nw-button svg {
      height: 100%;
      width: 100%;
      fill: var(--media-primary-color, #fff);
      fill-rule: evenodd;
    }

    .svg-shadow {
      stroke: #000;
      stroke-opacity: 0.15;
      stroke-width: 2px;
      fill: none;
    }
  </style>

  <media-controller
    breakpoints="sm:300 md:480"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration}}"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    mediaadbreak="{{mediaadbreak}}"
    part="controller"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-error-dialog slot="dialog"></media-error-dialog>

    <!-- Rendition Menu -->
    <style>
      media-rendition-menu,
      media-captions-menu {
        position: absolute;
        border-radius: 0.3rem;
        right: 12px;
        bottom: 61px;
        z-index: 70;
        will-change: width, height;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        transition: opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
        user-select: none;
        --media-settings-menu-min-width: 220px;
        --media-menu-item-checked-background: #f72210;
        --media-menu-item-checked-indicator-display: none;
        font-weight: 500;
      }

      [mediaisfullscreen] media-rendition-menu {
        --media-settings-menu-min-width: 320px;
        right: 24px;
        bottom: 70px;
      }
      media-chrome-menu-item {
        height: 40px;
        font-size: 13px;
        font-weight: 500;
        padding-top: 0;
        padding-bottom: 0;
      }

      [mediaisfullscreen] media-settings-menu-item {
        font-size: 20px;
        height: 50px;
      }

      media-settings-menu-item[submenusize='0'] {
        display: none;
      }

      /* Also hide if only 'Auto' is added. */
      .quality-settings[submenusize='1'] {
        display: none;
      }
    </style>

    <media-rendition-menu anchor="auto" hidden> </media-rendition-menu>
    <media-captions-menu hidden anchor="auto"></media-captions-menu>
    <!-- Time Range / Progress Bar -->

    <style>
      media-play-button[slot='centered-chrome'] {
        display: grid;
        grid-template-columns: 1.5rem auto;
        align-items: center;
        gap: 1.2rem;
        background: #000;
        border-radius: 2rem;
        opacity: 1;
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
        scale: 0.7;
      }

      [breakpointsm] media-play-button[slot='centered-chrome'] {
        scale: 1;
      }

      media-play-button[slot='centered-chrome'] {
        display: none;
      }

      media-play-button[slot='centered-chrome'][mediapaused] {
        display: block;
        line-height: 1;
        color: white;
      }

      media-play-button[slot='centered-chrome'][mediapaused]:hover {
        color: #f72210;
      }

      media-play-button[slot='centered-chrome'] p {
        margin: 0;
        align-items: center;
        display: flex;
        gap: 0.25rem;
      }

      media-play-button[slot='centered-chrome'] svg {
        width: 1.8rem;
        height: auto;
      }

      media-play-button[slot='centered-chrome'] media-duration-display {
        display: none;
        font-size: 1.3rem;
      }

      media-controller[mediacurrenttime='0'] media-duration-display {
        display: block;
        color: inherit;
        padding: 0 0.3rem;
      }

      media-controller:not([mediacurrenttime='0']) media-duration-display {
        display: none;
      }

      media-controller[mediacurrenttime='0'] media-play-button[slot='centered-chrome'] span {
        display: none;
      }
    </style>

    <media-play-button slot="centered-chrome">
      <p slot="play">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM8 14.5L14 10L8 5.5V14.5Z"
            fill="currentColor"
          />
        </svg>

        <span>Continue</span>
        <media-duration-display></media-duration-display>
      </p>
    </media-play-button>

    <!-- Time Range / Progress Bar -->
    <style>
      media-time-range {
        position: absolute;
        bottom: 36px;
        width: 100%;
        height: 5px;
        z-index: 2;
        --media-range-track-background: rgba(255, 255, 255, 0.2);
        --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
        --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
        --media-range-bar-color: var(--media-accent-color, #f72210);
        --media-range-thumb-border-radius: 13px;
        --media-range-thumb-background: var(--media-accent-color, #f72210);
        --media-range-thumb-transition: transform 0.1s linear;
        --media-range-thumb-transform: scale(0) translate(0%, 0%);
      }
      media-time-range:hover {
        --media-range-track-height: 5px;
        --media-range-thumb-transform: scale(1) translate(0%, 0%);
      }
      [breakpointmd] media-time-range {
        bottom: 47px;
      }
      [mediaisfullscreen] media-time-range {
        bottom: 52.5px;
        height: 8px;
      }
      [mediaisfullscreen] media-time-range:hover {
        --media-range-track-height: 8px;
      }

      media-preview-thumbnail {
        margin-bottom: 5px;
      }

      media-preview-chapter-display {
        padding-block: 0;
      }

      media-preview-time-display {
        padding-top: 0;
        background: #d8d8d8;
        color: black;
        padding: 0.25rem 0.5rem;
        text-shadow: none;
        display: block !important;
        opacity: 1;
        margin-bottom: 1rem;
      }
    </style>
    <media-time-range>
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
    </media-time-range>

    <!-- Control Bar -->
    <style>
      media-control-bar {
        height: 36px;
        line-height: 36px;
        padding-inline: 6px;
      }

      [breakpointmd] media-control-bar {
        height: 48px;
        line-height: 48px;
      }

      [mediaisfullscreen] media-control-bar {
        height: 54px;
        line-height: 54px;
      }

      media-control-bar {
        --gradient-steps:
          hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
          hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
          hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
          hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
      }

      media-control-bar::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding-bottom: min(100px, 25%);
        background: linear-gradient(to bottom, var(--gradient-steps));
        opacity: 0.8;
        pointer-events: none;
      }

      media-control-bar > * {
        position: relative;
      }
    </style>
    <media-control-bar>
      <!-- Play/Pause -->
      <style>
        media-play-button {
          --media-button-icon-width: 30px;
          padding: 6px 10px;
        }

        media-play-button :is(#play-p1, #play-p2, #pause-p1, #pause-p2) {
          transition: clip-path 0.25s ease-in;
        }

        /* Slow down the play icon part hiding slightly
          to achieve the morphing look a little better */
        media-play-button:not([mediapaused]) #play-p2,
        media-play-button:not([mediapaused]) #play-p2 {
          transition: clip-path 0.35s ease-in;
        }

        /* Show icon */
        media-play-button :is(#pause-p1, #pause-p2),
        media-play-button[mediapaused] :is(#play-p1, #play-p2) {
          clip-path: inset(0);
        }

        /* Hide icon wth clip path mask */
        media-play-button #play-p1 {
          clip-path: inset(0 100% 0 0);
        }
        media-play-button #play-p2 {
          clip-path: inset(0 20% 0 100%);
        }
        media-play-button[mediapaused] #pause-p1 {
          clip-path: inset(50% 0 50% 0);
        }
        media-play-button[mediapaused] #pause-p2 {
          clip-path: inset(50% 0 50% 0);
        }
      </style>
      <media-play-button mediapaused class="nw-button">
        <svg slot="icon" viewBox="0 0 36 36">
          <use class="svg-shadow" xlink:href="#icon-play"></use>
          <g id="icon-play">
            <path id="play-p1" d="M18.5 14L12 10V26L18.5 22V14Z" />
            <path id="play-p2" d="M18 13.6953L25 18L18 22.3086V13.6953Z" />
            <path id="pause-p1" d="M16 10H12V26H16V10Z" />
            <path id="pause-p2" d="M21 10H25V26H21V10Z" />
          </g>
        </svg>
      </media-play-button>

      <template if="breakpointsm">
        <template if="mediaadbreak == null">
          <media-seek-backward-button seekoffset="10">
            <svg slot="icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.908 21.7465C16.616 21.2426 16.2047 20.8212 15.7116 20.5206C15.2185 20.22 14.6594 20.0499 14.0851 20.0257C13.5109 20.0499 12.9518 20.22 12.4587 20.5206C11.9656 20.8212 11.5543 21.2426 11.2623 21.7465C10.5893 22.8804 10.2336 24.18 10.2336 25.5047C10.2336 26.8295 10.5893 28.129 11.2623 29.2629C11.5543 29.7668 11.9656 30.1882 12.4587 30.4888C12.9518 30.7894 13.5109 30.9595 14.0851 30.9838C14.6594 30.9595 15.2185 30.7894 15.7116 30.4888C16.2047 30.1882 16.616 29.7668 16.908 29.2629C17.581 28.129 17.9367 26.8295 17.9367 25.5047C17.9367 24.18 17.581 22.8804 16.908 21.7465ZM14.0851 29.409C12.8412 29.409 11.7886 27.6233 11.7886 25.4966C11.7886 23.3699 12.8412 21.5841 14.0851 21.5841C15.3291 21.5841 16.3817 23.3699 16.3817 25.4966C16.3817 27.6233 15.3451 29.409 14.0851 29.409ZM7.16351 30.9838V22.7043L6.39798 23.4836L5.31349 22.3796L7.38679 20.2692C7.49386 20.1598 7.63043 20.0853 7.77917 20.0551C7.92792 20.0248 8.08213 20.0403 8.22225 20.0994C8.36236 20.1585 8.48206 20.2587 8.56615 20.3872C8.65024 20.5157 8.69493 20.6667 8.69456 20.8211V31L7.16351 30.9838ZM33 9.8468V30.1883C32.9972 30.3941 32.9157 30.5907 32.7727 30.7362C32.6298 30.8817 32.4366 30.9647 32.2345 30.9675H22.2348V27.8343H29.9219V12.1845H11.4696V15.3177C11.4696 16.1782 10.8954 16.4866 10.1937 16.0158L3.52726 11.4865C3.30225 11.371 3.13094 11.17 3.05035 10.927C2.96977 10.6839 2.98641 10.4184 3.09666 10.1877C3.18836 9.99697 3.33987 9.84275 3.52726 9.7494L10.1937 5.22005C10.8954 4.74926 11.4696 5.05771 11.4696 5.91812V9.05133H32.2185C32.4248 9.05443 32.6218 9.13923 32.7677 9.28775C32.9136 9.43626 32.997 9.6368 33 9.8468Z"
                fill="currentColor"
              />
            </svg>
          </media-seek-backward-button>
        </template>
      </template>

      <!-- Time Display -->
      <style>
        media-time-display {
          padding-top: 6px;
          padding-bottom: 6px;
          font-size: 13px;
        }

        [mediaisfullscreen] media-time-display {
          font-size: 20px;
        }
      </style>

      <template if="breakpointsm">
        <template if="mediaadbreak == null">
          <media-time-display showduration></media-time-display>
        </template>

        <template if="mediaadbreak != null">
          <span>Advertisement</span>
          <media-time-display remaining></media-time-display>
        </template>
      </template>

      <template if="!breakpointsm">
        <template if="mediaadbreak == null">
          <media-time-display></media-time-display>
        </template>

        <template if="mediaadbreak != null">
          <span>Ad</span>
          <media-time-display remaining></media-time-display>
        </template>
      </template>

      <!-- Control Spacer -->
      <style>
        .control-spacer {
          flex-grow: 1;
        }
      </style>
      <span class="control-spacer"></span>

      <!-- Volume/Mute -->
      <style>
        media-mute-button :is(#icon-muted, #icon-volume) {
          transition: clip-path 0.3s ease-out;
        }
        media-mute-button #icon-muted {
          clip-path: inset(0 0 100% 0);
        }
        media-mute-button[mediavolumelevel='off'] #icon-muted {
          clip-path: inset(0);
        }
        media-mute-button #icon-volume {
          clip-path: inset(0);
        }
        media-mute-button[mediavolumelevel='off'] #icon-volume {
          clip-path: inset(100% 0 0 0);
        }

        media-mute-button #volume-high,
        media-mute-button[mediavolumelevel='off'] #volume-high {
          opacity: 1;
          transition: opacity 0.3s;
        }
        media-mute-button[mediavolumelevel='low'] #volume-high,
        media-mute-button[mediavolumelevel='medium'] #volume-high {
          opacity: 0.2;
        }

        media-volume-range {
          height: 36px;
          --media-range-track-background: rgba(255, 255, 255, 0.2);
        }

        media-mute-button + media-volume-range {
          width: 0;
          overflow: hidden;
          transition: width 0.2s ease-in;
        }

        /* Expand volume control in all relevant states */
        media-mute-button:hover + media-volume-range,
        media-mute-button:focus + media-volume-range,
        media-mute-button:focus-within + media-volume-range,
        media-volume-range:hover,
        media-volume-range:focus,
        media-volume-range:focus-within {
          width: 70px;
        }
      </style>
      <media-mute-button class="nw-button">
        <svg slot="icon" viewBox="0 0 36 36">
          <g id="icon-volume">
            <path id="speaker" d="M13 15H9V21H13L18 26V10L13 15Z" />
            <path
              id="volume-low"
              d="M20 22.0323C21.4818 21.2959 22.5 19.7669 22.5 18C22.5 16.2332 21.4818 14.7041 20 13.9678V22.0323Z"
            />
            <path
              id="volume-high"
              d="M20 9.22302V11.2899C22.8915 12.1505 25 14.829 25 18C25 21.171 22.8915 23.8495 20 24.7101V26.777C24.008 25.8675 27 22.2832 27 18C27 13.7168 24.008 10.1325 20 9.22302Z"
            />
          </g>
          <g id="icon-muted">
            <path
              d="M10.2207 8.80817L8.80762 10.2213L13.2929 14.7065L13 14.9995H9V20.9995H13L18 25.9995V19.4136L22.1922 23.6058C21.5401 24.0942 20.8 24.4715 20 24.7096V26.7764C21.3453 26.4712 22.5761 25.8646 23.6177 25.0314L25.7782 27.1918L27.1924 25.7776L27.1913 25.7766L27.1902 25.7776L10.2207 8.80817Z"
            />
            <path
              d="M25.8817 22.3478C26.5944 21.0589 27 19.5766 27 17.9995C27 13.7163 24.008 10.132 20 9.22247V11.2894C22.8915 12.1499 25 14.8284 25 17.9995C25 19.0177 24.7826 19.9851 24.3917 20.8578L25.8817 22.3478Z"
            />
            <path
              d="M22.4139 18.88C22.4704 18.5952 22.5 18.3008 22.5 17.9995C22.5 16.2326 21.4818 14.7036 20 13.9672V16.4661L22.4139 18.88Z"
            />
            <path d="M18 14.4661V9.99945L15.7667 12.2328L18 14.4661Z" />
          </g>
        </svg>
      </media-mute-button>
      <media-volume-range></media-volume-range>

      <!-- Settings Menu Button -->
      <template if="mediaadbreak == null">
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-rendition-menu-button class="nw-button">
          <svg slot="icon" viewBox="0 0 36 36">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <path
              id="settings-icon"
              d="M11.8153 12.0477L14.2235 12.9602C14.6231 12.6567 15.0599 12.3996 15.5258 12.1971L15.9379 9.66561C16.5985 9.50273 17.2891 9.41632 18 9.41632C18.7109 9.41632 19.4016 9.50275 20.0622 9.66566L20.4676 12.1555C20.9584 12.3591 21.418 12.6227 21.8372 12.9372L24.1846 12.0477C25.1391 13.0392 25.8574 14.2597 26.249 15.6186L24.3196 17.1948C24.3531 17.4585 24.3704 17.7272 24.3704 18C24.3704 18.2727 24.3531 18.5415 24.3196 18.8051L26.249 20.3814C25.8574 21.7403 25.1391 22.9607 24.1846 23.9522L21.8372 23.0628C21.4179 23.3772 20.9584 23.6408 20.4676 23.8445L20.0622 26.3343C19.4016 26.4972 18.7109 26.5836 18 26.5836C17.2891 26.5836 16.5985 26.4972 15.9379 26.3344L15.5258 23.8029C15.0599 23.6003 14.6231 23.3433 14.2236 23.0398L11.8154 23.9523C10.8609 22.9608 10.1426 21.7404 9.75098 20.3815L11.7633 18.7375C11.7352 18.4955 11.7208 18.2495 11.7208 18C11.7208 17.7505 11.7352 17.5044 11.7633 17.2625L9.75098 15.6185C10.1426 14.2596 10.8609 13.0392 11.8153 12.0477ZM18 20.75C19.5188 20.75 20.75 19.5188 20.75 18C20.75 16.4812 19.5188 15.25 18 15.25C16.4812 15.25 15.25 16.4812 15.25 18C15.25 19.5188 16.4812 20.75 18 20.75Z"
            />
          </svg>
        </media-rendition-menu-button>
        <media-captions-menu-button></media-captions-menu-button>
      </template>

      <!-- Fullscreen Button -->
      <style>
        /* Having trouble getting @property to work in the shadow dom
         to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

        media-fullscreen-button path {
          translate: 0% 0%;
        }
        media-fullscreen-button:hover path {
          animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        media-fullscreen-button:hover .urbounce {
          animation-name: up-right-bounce;
        }
        media-fullscreen-button:hover .dlbounce {
          animation-name: down-left-bounce;
        }
        media-fullscreen-button:hover .drbounce {
          animation-name: down-right-bounce;
        }

        @keyframes up-left-bounce {
          0% {
            translate: 0 0;
          }
          50% {
            translate: -4% -4%;
          }
        }
        @keyframes up-right-bounce {
          0% {
            translate: 0 0;
          }
          50% {
            translate: 4% -4%;
          }
        }
        @keyframes down-left-bounce {
          0% {
            translate: 0 0;
          }
          50% {
            translate: -4% 4%;
          }
        }
        @keyframes down-right-bounce {
          0% {
            translate: 0 0;
          }
          50% {
            translate: 4% 4%;
          }
        }
      </style>
      <media-fullscreen-button class="nw-button">
        <svg slot="enter" viewBox="0 0 36 36">
          <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
          <g id="fs-enter-paths">
            <path class="ulbounce" d="M11 15H9V9H15V11H11V15Z" />
            <path class="urbounce" d="M21 11L21 9L27 9L27 15L25 15L25 11L21 11Z" />
            <path class="dlbounce" d="M15 25L15 27L9 27L9 21L11 21L11 25L15 25Z" />
            <path class="drbounce" d="M25 21L27 21L27 27L21 27L21 25L25 25L25 21Z" />
          </g>
        </svg>
        <svg slot="exit" viewBox="0 0 36 36">
          <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
          <g id="fs-exit-paths">
            <path class="drbounce" d="M14 9L16 9L16 16L9 16L9 14L14 14L14 9Z" />
            <path class="dlbounce" d="M27 14L27 16L20 16L20 9L22 9L22 14L27 14Z" />
            <path class="urbounce" d="M9 22L9 20L16 20L16 27L14 27L14 22L9 22Z" />
            <path class="ulbounce" d="M22 27H20V20H27V22H22V27Z" />
          </g>
        </svg>
      </media-fullscreen-button>
    </media-control-bar>
  </media-controller>
</template>
`,za=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends za{}globalThis.DocumentFragment=e}var Fa=class extends za{},Qn={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Fa)}};function Xn(e,t){return new Fa}var Ya={document:{createElement:Xn},customElements:Qn},Qa=typeof window>"u"||typeof globalThis.customElements>"u",ya=Qa?Ya:globalThis,Jn=Qa?Ya.document:globalThis.document,$e={MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest"},J={MEDIA_CONTROLLER:"mediacontroller"},jn={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Xa=Object.entries(jn),l=Xa.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),er={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},$t=Xa.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...er});Object.entries($t).reduce((e,[t,i])=>{const a=l[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});Object.entries(l).reduce((e,[t,i])=>{const a=$t[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"});var Ta={SUBTITLES:"subtitles",CAPTIONS:"captions"},Ja=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},ja=class extends Ja{},Aa=class extends ja{constructor(){super(...arguments),this.role=null}},tr=class{observe(){}unobserve(){}disconnect(){}},en={createElement:function(){return new ot.HTMLElement},createElementNS:function(){return new ot.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},ot={ResizeObserver:tr,document:en,Node:ja,Element:Aa,HTMLElement:class extends Aa{constructor(){super(...arguments),this.innerHTML=""}get content(){return new ot.DocumentFragment}},DocumentFragment:class extends Ja{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},tn="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",an=Object.keys(ot).every(e=>e in globalThis),d=tn&&!an?ot:globalThis,lt=tn&&!an?en:globalThis.document,nn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},c=(e,t,i)=>(nn(e,t,"read from private field"),i?i.call(e):t.get(e)),O=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$=(e,t,i,a)=>(nn(e,t,"write to private field"),t.set(e,i),i),ye,kt,oe,Xe,G,q,z,le,Te,yt,M,wa=1,Sa=0,ir=1,ar={processCallback(e,t,i){if(i){for(const[a,n]of t)if(a in i){const r=i[a];typeof r=="boolean"&&n instanceof me&&typeof n.element[n.attributeName]=="boolean"?n.booleanValue=r:typeof r=="function"&&n instanceof me?n.element[n.attributeName]=r:n.value=r}}}},Qi=class extends d.DocumentFragment{constructor(e,t,i=ar){var a;super(),O(this,ye,void 0),O(this,kt,void 0),this.append(e.content.cloneNode(!0)),$(this,ye,rn(this)),$(this,kt,i),(a=i.createCallback)==null||a.call(i,this,c(this,ye),t),i.processCallback(this,c(this,ye),t)}update(e){c(this,kt).processCallback(this,c(this,ye),e)}};ye=new WeakMap;kt=new WeakMap;var rn=(e,t=[])=>{let i,a;for(const n of e.attributes||[])if(n.value.includes("{{")){const r=new rr;for([i,a]of Ma(n.value))if(!i)r.append(a);else{const s=new me(e,n.name,n.namespaceURI);r.append(s),t.push([a,s])}n.value=r.toString()}for(const n of e.childNodes)if(n.nodeType===wa&&!(n instanceof HTMLTemplateElement))rn(n,t);else{const r=n.data;if(n.nodeType===wa||r.includes("{{")){const s=[];if(r)for([i,a]of Ma(r))if(!i)s.push(new Text(a));else{const o=new ln(e);s.push(o),t.push([a,o])}else if(n instanceof HTMLTemplateElement){const o=new dn(e,n);s.push(o),t.push([o.expression,o])}n.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return t},La={},Ma=e=>{let t="",i=0,a=La[e],n=0,r;if(a)return a;for(a=[];r=e[n];n++)r==="{"&&e[n+1]==="{"&&e[n-1]!=="\\"&&e[n+2]&&++i==1?(t&&a.push([Sa,t]),t="",n++):r==="}"&&e[n+1]==="}"&&e[n-1]!=="\\"&&!--i?(a.push([ir,t.trim()]),t="",n++):t+=r||"";return t&&a.push([Sa,(i>0?"{{":"")+t]),La[e]=a},nr=11,sn=class{get value(){return""}set value(e){}toString(){return this.value}},on=new WeakMap,rr=class{constructor(){O(this,oe,[])}[Symbol.iterator](){return c(this,oe).values()}get length(){return c(this,oe).length}item(e){return c(this,oe)[e]}append(...e){for(const t of e)t instanceof me&&on.set(t,this),c(this,oe).push(t)}toString(){return c(this,oe).join("")}};oe=new WeakMap;var me=class extends sn{constructor(e,t,i){super(),O(this,le),O(this,Xe,""),O(this,G,void 0),O(this,q,void 0),O(this,z,void 0),$(this,G,e),$(this,q,t),$(this,z,i)}get attributeName(){return c(this,q)}get attributeNamespace(){return c(this,z)}get element(){return c(this,G)}get value(){return c(this,Xe)}set value(e){c(this,Xe)!==e&&($(this,Xe,e),!c(this,le,Te)||c(this,le,Te).length===1?e==null?c(this,G).removeAttributeNS(c(this,z),c(this,q)):c(this,G).setAttributeNS(c(this,z),c(this,q),e):c(this,G).setAttributeNS(c(this,z),c(this,q),c(this,le,Te).toString()))}get booleanValue(){return c(this,G).hasAttributeNS(c(this,z),c(this,q))}set booleanValue(e){if(!c(this,le,Te)||c(this,le,Te).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};Xe=new WeakMap;G=new WeakMap;q=new WeakMap;z=new WeakMap;le=new WeakSet;Te=function(){return on.get(this)};var ln=class extends sn{constructor(e,t){super(),O(this,yt,void 0),O(this,M,void 0),$(this,yt,e),$(this,M,t?[...t]:[new Text])}get replacementNodes(){return c(this,M)}get parentNode(){return c(this,yt)}get nextSibling(){return c(this,M)[c(this,M).length-1].nextSibling}get previousSibling(){return c(this,M)[0].previousSibling}get value(){return c(this,M).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===nr?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),$(this,M,sr(c(this,M)[0].parentNode,c(this,M),t,this.nextSibling))}};yt=new WeakMap;M=new WeakMap;var dn=class extends ln{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function sr(e,t,i,a=null){let n=0,r,s,o,m=i.length,u=t.length;for(;n<m&&n<u&&t[n]==i[n];)n++;for(;n<m&&n<u&&i[m-1]==t[u-1];)a=i[--u,--m];if(n==u)for(;n<m;)e.insertBefore(i[n++],a);if(n==m)for(;n<u;)e.removeChild(t[n++]);else{for(r=t[n];n<m;)o=i[n++],s=r?r.nextSibling:a,r==o?r=s:n<m&&i[n]==s?(e.replaceChild(o,r),r=s):e.insertBefore(o,r);for(;r!=a;)s=r.nextSibling,e.removeChild(r),r=s}return i}function or(e){return e?.split(/\s+/).map(lr)}function lr(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function dr(e){return e?.split(/\s+/).map(ur)}function ur(e){if(e){const[t,i,a,n]=e.split(":");return{id:t,kind:i,language:a,label:n}}}function cr(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function un(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var Ca={string:e=>String(e)},cn=class{constructor(e){this.template=e,this.state=void 0}},ue=new WeakMap,ce=new WeakMap,gi={partial:(e,t)=>{t[e.expression]=new cn(e.template)},if:(e,t)=>{var i;if(hn(e.expression,t))if(ue.get(e)!==e.template){ue.set(e,e.template);const a=new Qi(e.template,t,Xi);e.replace(a),ce.set(e,a)}else(i=ce.get(e))==null||i.update(t);else e.replace(""),ue.delete(e),ce.delete(e)}},hr=Object.keys(gi),Xi={processCallback(e,t,i){var a,n;if(i)for(const[r,s]of t){if(s instanceof dn){if(!s.directive){const m=hr.find(u=>s.template.hasAttribute(u));m&&(s.directive=m,s.expression=s.template.getAttribute(m))}(a=gi[s.directive])==null||a.call(gi,s,i);continue}let o=hn(r,i);if(o instanceof cn){ue.get(s)!==o.template?(ue.set(s,o.template),o=new Qi(o.template,o.state,Xi),s.value=o,ce.set(s,o)):(n=ce.get(s))==null||n.update(o.state);continue}o?(s instanceof me&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof me?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,ue.delete(s),ce.delete(s))):s instanceof me?s.value=void 0:(s.value=void 0,ue.delete(s),ce.delete(s))}}},xa={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=Ca[t])==null?void 0:i.call(Ca,e)}};function mr(e){return pr(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function hn(e,t={}){var i,a,n,r,s,o,m;const u=mr(e);if(u.length===0||u.some(({type:E})=>!E))return ze(e);if(((i=u[0])==null?void 0:i.token)===">"){const E=t[(a=u[1])==null?void 0:a.token];if(!E)return ze(e);const k={...t};E.state=k;const T=u.slice(2);for(let C=0;C<T.length;C+=3){const qe=(n=T[C])==null?void 0:n.token,mt=(r=T[C+1])==null?void 0:r.token,Fn=(s=T[C+2])==null?void 0:s.token;qe&&mt==="="&&(k[qe]=Fe(Fn,t))}return E}if(u.length===1)return pt(u[0])?Fe(u[0].token,t):ze(e);if(u.length===2){const E=(o=u[0])==null?void 0:o.token,k=xa[E];if(!k||!pt(u[1]))return ze(e);const T=Fe(u[1].token,t);return k(T)}if(u.length===3){const E=(m=u[1])==null?void 0:m.token,k=xa[E];if(!k||!pt(u[0])||!pt(u[2]))return ze(e);const T=Fe(u[0].token,t);if(E==="|")return k(T,u[2].token);const C=Fe(u[2].token,t);return k(T,C)}}function ze(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function pt({type:e}){return["number","boolean","string","param"].includes(e)}function Fe(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):un(e)?parseFloat(e):t[e]}function pr(e,t){let i,a,n;const r=[];for(;e;){n=null,i=e.length;for(const s in t)a=t[s].exec(e),a&&a.index<i&&(n={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&r.push({token:e.substr(0,i),type:void 0}),n&&r.push(n),e=e.substr(i+(n?n.token.length:0))}return r}var Ji=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},F=(e,t,i)=>(Ji(e,t,"read from private field"),i?i.call(e):t.get(e)),ne=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},U=(e,t,i,a)=>(Ji(e,t,"write to private field"),t.set(e,i),i),di=(e,t,i)=>(Ji(e,t,"access private method"),i),Ne,Tt,Pe,Ae,bi,mn,At,Ei,Je,ui={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},pn=lt.createElement("template");pn.innerHTML=`
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
`;var ti=class extends d.HTMLElement{constructor(){super(),ne(this,bi),ne(this,At),ne(this,Ne,void 0),ne(this,Tt,void 0),ne(this,Pe,void 0),ne(this,Ae,void 0),ne(this,Je,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),U(this,Ae,new MutationObserver(e=>{var t;this.mediaController&&!((t=this.mediaController)!=null&&t.breakpointsComputed)||e.some(i=>{const a=i.target;return a===this?!0:a.localName!=="media-controller"?!1:!!(ui[i.attributeName]||i.attributeName.startsWith("breakpoint"))})&&this.render()})),U(this,Je,this.render.bind(this)),di(this,bi,mn).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=F(this,Ne))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(U(this,Ne,e),U(this,Pe,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:r})=>ui[r]||r.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const r of a){const s=(i=ui[r.name])!=null?i:cr(r.name);let{value:o}=r;o!=null?(un(o)&&(o=parseFloat(o)),n[s]=o===""?!0:o):n[s]=!1}return n}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&di(this,At,Ei).call(this)}connectedCallback(){this.addEventListener($t.BREAKPOINTS_COMPUTED,F(this,Je)),F(this,Ae).observe(this,{attributes:!0}),F(this,Ae).observe(this.renderRoot,{attributes:!0,subtree:!0}),di(this,At,Ei).call(this)}disconnectedCallback(){this.removeEventListener($t.BREAKPOINTS_COMPUTED,F(this,Je)),F(this,Ae).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==F(this,Tt)&&(U(this,Tt,this.template),this.renderer=new Qi(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(pn.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};Ne=new WeakMap;Tt=new WeakMap;Pe=new WeakMap;Ae=new WeakMap;bi=new WeakSet;mn=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};At=new WeakSet;Ei=function(){var e;const t=this.getAttribute("template");if(!t||t===F(this,Pe))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){U(this,Pe,t),U(this,Ne,a),this.createRenderer();return}vr(t)&&(U(this,Pe,t),fr(t).then(n=>{const r=lt.createElement("template");r.innerHTML=n,U(this,Ne,r),this.createRenderer()}).catch(console.error))};Je=new WeakMap;ti.observedAttributes=["template"];ti.processor=Xi;function vr(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function fr(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",ti);function gr({anchor:e,floating:t,placement:i}){const a=br({anchor:e,floating:t}),{x:n,y:r}=_r(a,i);return{x:n,y:r}}function br({anchor:e,floating:t}){return{anchor:Er(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function Er(e,t){var i;const a=e.getBoundingClientRect(),n=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-n.x,y:a.y-n.y,width:a.width,height:a.height}}function _r({anchor:e,floating:t},i){const a=kr(i)==="x"?"y":"x",n=a==="y"?"height":"width",r=vn(i),s=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,m=e[n]/2-t[n]/2;let u;switch(r){case"top":u={x:s,y:e.y-t.height};break;case"bottom":u={x:s,y:e.y+e.height};break;case"right":u={x:e.x+e.width,y:o};break;case"left":u={x:e.x-t.width,y:o};break;default:u={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":u[a]-=m;break;case"end":u[a]+=m;break}return u}function vn(e){return e.split("-")[0]}function kr(e){return["top","bottom"].includes(vn(e))?"y":"x"}var Ia=new WeakMap,ji=e=>{let t=Ia.get(e);return t||Ia.set(e,t=new Set),t},fn=new d.ResizeObserver(e=>{for(const t of e)for(const i of ji(t.target))i(t)});function Vt(e,t){ji(e).add(t),fn.observe(e)}function Zt(e,t){const i=ji(e);i.delete(t),i.size||fn.unobserve(e)}var ea=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},yr=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}};function ii(e){const t={};for(const i of e)t[i.name]=i.value;return t}function y(e){var t;return(t=_i(e))!=null?t:ni(e,"media-controller")}function _i(e){var t;const{MEDIA_CONTROLLER:i}=J,a=e.getAttribute(i);if(a)return(t=ri(e))==null?void 0:t.getElementById(a)}var ai=(e,t)=>!e||!t?!1:e?.contains(t)?!0:ai(e,t.getRootNode().host),ni=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||ni(e.getRootNode().host,t)};function gn(e=document){var t;const i=e?.activeElement;return i?(t=gn(i.shadowRoot))!=null?t:i:null}function ri(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Tr(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let n=e;for(;n&&t>0;){const r=getComputedStyle(n);if(i&&r.opacity==="0"||a&&r.visibility==="hidden"||r.display==="none")return!1;n=n.parentElement,t--}return!0}function Ar(e,t){const i=wr(e,a=>a===t);return i||bn(e,t)}function wr(e,t){var i,a;let n;for(n of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let r;try{r=(a=n.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of r??[])if(t(s.selectorText))return s}}function bn(e,t){var i,a;const n=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],r=n?.[n.length-1];if(!r?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=r?.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length);return(a=r.sheet.cssRules)==null?void 0:a[s]}function fe(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function Ve(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}fe(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ki(e,t){return e.hasAttribute(t)}function Ra(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}ki(e,t)!=i&&e.toggleAttribute(t,i)}function Z(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function te(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;Z(e,t,void 0)!==a&&e.setAttribute(t,a)}var ta=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h=(e,t,i)=>(ta(e,t,"read from private field"),i?i.call(e):t.get(e)),p=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},w=(e,t,i,a)=>(ta(e,t,"write to private field"),t.set(e,i),i),v=(e,t,i)=>(ta(e,t,"access private method"),i),I,ee,V,wt,je,pe,dt,yi,En,Kt,ia,Gt,St,Ti,Ai,_n,wi,kn,Si,yn,We,Be,Ue,ut,qt,aa,Li,Tn,na,An,Mi,wn,ra,Sn,Ci,Ln,xi,Mn,nt,zt,Ii,Cn,rt,Ft,Lt,Ri;function Ze({type:e,text:t,value:i,checked:a}){const n=lt.createElement("media-chrome-menu-item");n.type=e,n.part.add("menu-item"),n.part.add(e),n.value=i,n.checked=a;const r=lt.createElement("span");return r.textContent=t,n.append(r),n}function ve(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function Sr(e){return`
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
  `}var re={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},L=class extends d.HTMLElement{constructor(){if(super(),p(this,yi),p(this,Kt),p(this,St),p(this,Ai),p(this,wi),p(this,Si),p(this,Ue),p(this,qt),p(this,Li),p(this,na),p(this,Mi),p(this,ra),p(this,Ci),p(this,xi),p(this,nt),p(this,Ii),p(this,rt),p(this,Lt),p(this,I,null),p(this,ee,null),p(this,V,null),p(this,wt,new Set),p(this,je,void 0),p(this,pe,!1),p(this,dt,null),p(this,Gt,()=>{const e=h(this,wt),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));w(this,wt,t)}),p(this,We,()=>{v(this,Ue,ut).call(this),v(this,qt,aa).call(this,!1)}),p(this,Be,()=>{v(this,Ue,ut).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),w(this,je,new MutationObserver(h(this,Gt)))}static get observedAttributes(){return[re.DISABLED,re.HIDDEN,re.STYLE,re.ANCHOR,J.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":v(this,yi,En).call(this,e);break;case"invoke":v(this,Ai,_n).call(this,e);break;case"click":v(this,Li,Tn).call(this,e);break;case"toggle":v(this,Mi,wn).call(this,e);break;case"focusout":v(this,Ci,Ln).call(this,e);break;case"keydown":v(this,xi,Mn).call(this,e);break}}connectedCallback(){var e,t;h(this,je).observe(this.defaultSlot,{childList:!0}),w(this,dt,bn(this.shadowRoot,":host")),v(this,St,Ti).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),w(this,I,_i(this)),(t=(e=h(this,I))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(Vt(ct(this),h(this,We)),Vt(this,h(this,Be))),v(this,Kt,ia).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;h(this,je).disconnect(),Zt(ct(this),h(this,We)),Zt(this,h(this,Be)),this.disable(),(t=(e=h(this,I))==null?void 0:e.unassociateElement)==null||t.call(e,this),w(this,I,null),w(this,ee,null),w(this,V,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,n,r,s;e===re.HIDDEN&&i!==t?(h(this,pe)||w(this,pe,!0),this.hidden?v(this,Si,yn).call(this):v(this,wi,kn).call(this),this.dispatchEvent(new yr({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===J.MEDIA_CONTROLLER?(t&&((n=(a=h(this,I))==null?void 0:a.unassociateElement)==null||n.call(a,this),w(this,I,null)),i&&this.isConnected&&(w(this,I,_i(this)),(s=(r=h(this,I))==null?void 0:r.associateElement)==null||s.call(r,this))):e===re.DISABLED&&i!==t?i==null?this.enable():this.disable():e===re.STYLE&&i!==t&&v(this,St,Ti).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=ri(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Lr)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&v(this,Lt,Ri).call(this,t)}focus(){if(w(this,ee,gn()),this.items.length){v(this,rt,Ft).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var t;const i=v(this,nt,zt).call(this,e);i&&(v(this,Lt,Ri).call(this,i,i.type==="checkbox"),h(this,V)&&!this.hidden&&((t=h(this,ee))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,n=this.items,r=(i=(t=v(this,nt,zt).call(this,e))!=null?t:v(this,Ii,Cn).call(this))!=null?i:n[0],s=n.indexOf(r);let o=Math.max(0,s);a==="ArrowDown"?o++:a==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),v(this,rt,Ft).call(this,n[o]),n[o].focus()}};I=new WeakMap;ee=new WeakMap;V=new WeakMap;wt=new WeakMap;je=new WeakMap;pe=new WeakMap;dt=new WeakMap;yi=new WeakSet;En=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&v(this,Kt,ia).call(this),t.name||h(this,Gt).call(this)};Kt=new WeakSet;ia=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};Gt=new WeakMap;St=new WeakSet;Ti=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};Ai=new WeakSet;_n=function(e){w(this,V,e.relatedTarget),ai(this,e.relatedTarget)||(this.hidden=!this.hidden)};wi=new WeakSet;kn=function(){var e;(e=h(this,V))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Vt(ct(this),h(this,We)),Vt(this,h(this,Be))};Si=new WeakSet;yn=function(){var e;(e=h(this,V))==null||e.setAttribute("aria-expanded","false"),Zt(ct(this),h(this,We)),Zt(this,h(this,Be))};We=new WeakMap;Be=new WeakMap;Ue=new WeakSet;ut=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=gr({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const n=ct(this).getBoundingClientRect(),r=n.width-t-e,s=n.height-i-this.offsetHeight,{style:o}=h(this,dt);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,r)}px`),o.setProperty("--_menu-bottom",`${s}px`);const m=getComputedStyle(this),E=o.getPropertyValue("--_menu-bottom")===m.bottom?s:parseFloat(m.bottom),k=n.height-E-parseFloat(m.marginBottom);this.style.setProperty("--_menu-max-height",`${k}px`)};qt=new WeakSet;aa=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=h(this,dt);if(e||a.setProperty("--media-menu-transition-in","none"),i){const n=i.offsetHeight,r=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${n}px`),v(this,Ue,ut).call(this,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),v(this,Ue,ut).call(this);a.removeProperty("--media-menu-transition-in")};Li=new WeakSet;Tn=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(h(this,na,An))){(t=h(this,ee))==null||t.focus(),this.hidden=!0;return}const i=v(this,nt,zt).call(this,e);!i||i.hasAttribute("disabled")||(v(this,rt,Ft).call(this,i),this.handleSelect(e))};na=new WeakSet;An=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};Mi=new WeakSet;wn=function(e){if(e.target===this)return;v(this,ra,Sn).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new ea({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);v(this,qt,aa).call(this,!0)};ra=new WeakSet;Sn=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};Ci=new WeakSet;Ln=function(e){var t;ai(this,e.relatedTarget)||(h(this,pe)&&((t=h(this,ee))==null||t.focus()),h(this,V)&&h(this,V)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};xi=new WeakSet;Mn=function(e){var t,i,a,n,r;const{key:s,ctrlKey:o,altKey:m,metaKey:u}=e;if(!(o||m||u)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(h(this,pe)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(n=(a=this.nextElementSibling)==null?void 0:a.focus)==null||n.call(a),this.blur()}else s==="Escape"?((r=h(this,ee))==null||r.focus(),h(this,pe)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};nt=new WeakSet;zt=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Ii=new WeakSet;Cn=function(){return this.items.find(e=>e.tabIndex===0)};rt=new WeakSet;Ft=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Lt=new WeakSet;Ri=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,n)=>a!=i[n])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};L.shadowRootOptions={mode:"open"};L.getTemplateHTML=Sr;function Lr(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function ct(e){var t;return(t=e.getAttribute("bounds")?ni(e,`#${e.getAttribute("bounds")}`):y(e)||e.parentElement)!=null?t:e}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",L);var sa=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_=(e,t,i)=>(sa(e,t,"read from private field"),i?i.call(e):t.get(e)),P=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ci=(e,t,i,a)=>(sa(e,t,"write to private field"),t.set(e,i),i),Re=(e,t,i)=>(sa(e,t,"access private method"),i),Mt,st,Di,xn,Yt,oa,la,In,N,we,Hi,Ct,Oi;function Mr(e){return`
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
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function Cr(e){return""}var A={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},ae=class extends d.HTMLElement{constructor(){if(super(),P(this,Di),P(this,Yt),P(this,la),P(this,Ct),P(this,Mt,!1),P(this,st,void 0),P(this,N,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(t=a?.dataset.description)!=null?t:a?.text,r=lt.createElement("span");r.textContent=n??"",i.replaceChildren(r)}),P(this,we,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",_(this,we));return}this.handleClick(e)}),P(this,Hi,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",_(this,we));return}this.addEventListener("keyup",_(this,we),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[A.TYPE,A.DISABLED,A.CHECKED,A.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Ye(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Re(this,Di,xn).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":_(this,Hi).call(this,e);break;case"keyup":_(this,we).call(this,e);break}}attributeChangedCallback(e,t,i){e===A.CHECKED&&Ye(this)&&!_(this,Mt)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===A.TYPE&&i!==t?this.role="menuitem"+i:e===A.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(A.DISABLED)||this.enable(),this.role="menuitem"+this.type,ci(this,st,Ni(this,this.parentNode)),Re(this,Ct,Oi).call(this),this.submenuElement&&Re(this,Yt,oa).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),Re(this,Ct,Oi).call(this),ci(this,st,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=ri(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(A.TYPE))!=null?e:""}set type(e){this.setAttribute(A.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(A.VALUE))!=null?e:this.text}set value(e){this.setAttribute(A.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Ye(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Ye(this)&&(ci(this,Mt,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Ye(this)||this.invokeTargetElement&&ai(this,e.target)&&this.invokeTargetElement.dispatchEvent(new ea({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};Mt=new WeakMap;st=new WeakMap;Di=new WeakSet;xn=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?Re(this,Yt,oa).call(this):Re(this,la,In).call(this))};Yt=new WeakSet;oa=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",_(this,N)),this.submenuElement.addEventListener("addmenuitem",_(this,N)),this.submenuElement.addEventListener("removemenuitem",_(this,N)),_(this,N).call(this)};la=new WeakSet;In=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",_(this,N)),this.submenuElement.removeEventListener("addmenuitem",_(this,N)),this.submenuElement.removeEventListener("removemenuitem",_(this,N)),_(this,N).call(this)};N=new WeakMap;we=new WeakMap;Hi=new WeakMap;Ct=new WeakSet;Oi=function(){var e;const t=(e=_(this,st))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};ae.shadowRootOptions={mode:"open"};ae.getTemplateHTML=Mr;ae.getSuffixSlotInnerHTML=Cr;function Ye(e){return e.type==="radio"||e.type==="checkbox"}function Ni(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Ni(e,i):t?.items?t:Ni(t,t?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",ae);function xr(e){return`
    ${L.getTemplateHTML(e)}
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
  `}var Rn=class extends L{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-settings-menu-button")}};Rn.getTemplateHTML=xr;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",Rn);function Ir(e){return`
    ${ae.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Rr(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var si=class extends ae{};si.shadowRootOptions={mode:"open"};si.getTemplateHTML=Ir;si.getSuffixSlotInnerHTML=Rr;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",si);var be={PLACEMENT:"placement",BOUNDS:"bounds"};function Dr(e){return`
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
  `}var oi=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Tr(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=ni(this,"#"+this.bounds))!=null?e:y(this);if(!a)return;const{x:n,width:r}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),m=s+o,u=n+r,E=i.getPropertyValue("--media-tooltip-offset-x"),k=E?parseFloat(E.replace("px","")):0,T=i.getPropertyValue("--media-tooltip-container-margin"),C=T?parseFloat(T.replace("px","")):0,qe=s-n+k-C,mt=m-u+k+C;if(qe<0){this.style.setProperty("--media-tooltip-offset-x",`${qe}px`);return}if(mt>0){this.style.setProperty("--media-tooltip-offset-x",`${mt}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ii(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[be.PLACEMENT,be.BOUNDS]}get placement(){return Z(this,be.PLACEMENT)}set placement(e){te(this,be.PLACEMENT,e)}get bounds(){return Z(this,be.BOUNDS)}set bounds(e){te(this,be.BOUNDS,e)}};oi.shadowRootOptions={mode:"open"};oi.getTemplateHTML=Dr;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",oi);var Da=oi,da=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},f=(e,t,i)=>(da(e,t,"read from private field"),i?i.call(e):t.get(e)),se=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},vt=(e,t,i,a)=>(da(e,t,"write to private field"),t.set(e,i),i),Ha=(e,t,i)=>(da(e,t,"access private method"),i),R,De,Pi,Dn,j,Se,xt,Wi,Hn,K={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Hr(e,t={}){return`
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

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Da.shadowRootOptions.mode}">
          ${Da.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Or(e,t){return`
    <slot></slot>
  `}function Nr(){return""}var ge=class extends d.HTMLElement{constructor(){if(super(),se(this,Pi),se(this,Wi),se(this,R,void 0),this.preventClick=!1,this.tooltipEl=null,se(this,De,e=>{this.preventClick||this.handleClick(e),setTimeout(f(this,j),0)}),se(this,j,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),se(this,Se,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",f(this,Se));return}this.preventClick||this.handleClick(e)}),se(this,xt,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",f(this,Se));return}this.addEventListener("keyup",f(this,Se),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ii(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",K.TOOLTIP_PLACEMENT,J.MEDIA_CONTROLLER,l.MEDIA_LANG]}enable(){this.addEventListener("click",f(this,De)),this.addEventListener("keydown",f(this,xt)),this.tabIndex=0}disable(){this.removeEventListener("click",f(this,De)),this.removeEventListener("keydown",f(this,xt)),this.removeEventListener("keyup",f(this,Se)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,n,r,s,o;e===J.MEDIA_CONTROLLER?(t&&((n=(a=f(this,R))==null?void 0:a.unassociateElement)==null||n.call(a,this),vt(this,R,null)),i&&this.isConnected&&(vt(this,R,(r=this.getRootNode())==null?void 0:r.getElementById(i)),(o=(s=f(this,R))==null?void 0:s.associateElement)==null||o.call(s,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===K.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===l.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Ha(this,Pi,Dn).call(this)&&f(this,j).call(this)}connectedCallback(){var e,t,i;const{style:a}=Ar(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(J.MEDIA_CONTROLLER);n&&(vt(this,R,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(i=(t=f(this,R))==null?void 0:t.associateElement)==null||i.call(t,this)),d.customElements.whenDefined("media-tooltip").then(()=>Ha(this,Wi,Hn).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=f(this,R))==null?void 0:e.unassociateElement)==null||t.call(e,this),vt(this,R,null),this.removeEventListener("mouseenter",f(this,j)),this.removeEventListener("focus",f(this,j)),this.removeEventListener("click",f(this,De))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return Z(this,K.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){te(this,K.TOOLTIP_PLACEMENT,e)}get mediaController(){return Z(this,J.MEDIA_CONTROLLER)}set mediaController(e){te(this,J.MEDIA_CONTROLLER,e)}get disabled(){return ki(this,K.DISABLED)}set disabled(e){Ra(this,K.DISABLED,e)}get noTooltip(){return ki(this,K.NO_TOOLTIP)}set noTooltip(e){Ra(this,K.NO_TOOLTIP,e)}handleClick(e){}};R=new WeakMap;De=new WeakMap;Pi=new WeakSet;Dn=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};j=new WeakMap;Se=new WeakMap;xt=new WeakMap;Wi=new WeakSet;Hn=function(){this.addEventListener("mouseenter",f(this,j)),this.addEventListener("focus",f(this,j)),this.addEventListener("click",f(this,De));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};ge.shadowRootOptions={mode:"open"};ge.getTemplateHTML=Hr;ge.getSlotTemplateHTML=Or;ge.getTooltipContentHTML=Nr;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",ge);var Ge=class extends ge{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=ri(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new ea({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",Ge);var Pr={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."},Oa,hi={en:Pr},Na=((Oa=globalThis.navigator)==null?void 0:Oa.language)||"en",Wr=e=>{var t,i,a;const[n]=Na.split("-");return((t=hi[Na])==null?void 0:t[e])||((i=hi[n])==null?void 0:i[e])||((a=hi.en)==null?void 0:a[e])||e},b=(e,t={})=>Wr(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`);function Br(){return`
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
  `}function Ur(){return b("Settings")}var ua=class extends Ge{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",b("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-settings-menu")}};ua.getSlotTemplateHTML=Br;ua.getTooltipContentHTML=Ur;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",ua);var ca=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},On=(e,t,i)=>(ca(e,t,"read from private field"),i?i.call(e):t.get(e)),ft=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Bi=(e,t,i,a)=>(ca(e,t,"write to private field"),t.set(e,i),i),gt=(e,t,i)=>(ca(e,t,"access private method"),i),et,Qt,It,Ui,Rt,$i,$r=class extends L{constructor(){super(...arguments),ft(this,It),ft(this,Rt),ft(this,et,[]),ft(this,Qt,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===l.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(Bi(this,et,dr(i??"")),gt(this,It,Ui).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gt(this,Rt,$i))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gt(this,Rt,$i))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=y(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return On(this,et)}set mediaAudioTrackList(e){Bi(this,et,e),gt(this,It,Ui).call(this)}get mediaAudioTrackEnabled(){var e;return(e=Z(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){te(this,l.MEDIA_AUDIO_TRACK_ENABLED,e)}};et=new WeakMap;Qt=new WeakMap;It=new WeakSet;Ui=function(){if(On(this,Qt)===JSON.stringify(this.mediaAudioTrackList))return;Bi(this,Qt,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="",e.sort((t,i)=>t.id.localeCompare(i.id,void 0,{numeric:!0}));for(const t of e){const i=this.formatMenuItemText(t.label,t),a=Ze({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(ve(this,"checked-indicator")),this.defaultSlot.append(a)}};Rt=new WeakSet;$i=function(){if(this.value==null)return;const e=new d.CustomEvent($e.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",$r);var Vr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function Zr(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Vr}</slot>
  `}function Kr(){return b("Audio")}var Pa=e=>{const t=b("Audio");e.setAttribute("aria-label",t)},ha=class extends Ge{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Pa(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_LANG&&Pa(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=y(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=Z(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){te(this,l.MEDIA_AUDIO_TRACK_ENABLED,e)}};ha.getSlotTemplateHTML=Zr;ha.getTooltipContentHTML=Kr;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",ha);var Gr=(e="")=>e.split(/\s+/),qr=(e="")=>{const[t,i,a]=e.split(":"),n=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Ta.CAPTIONS:Ta.SUBTITLES,language:i,label:n}},Nn=(e="",t={})=>Gr(e).map(i=>{const a=qr(i);return{...t,...a}}),Vi=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,Pn=(e=[])=>Array.prototype.map.call(e,Vi).join(" "),zr=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(l.MEDIA_SUBTITLES_SHOWING)},ma=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fr=(e,t,i)=>(ma(e,t,"read from private field"),t.get(e)),mi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Yr=(e,t,i,a)=>(ma(e,t,"write to private field"),t.set(e,i),i),bt=(e,t,i)=>(ma(e,t,"access private method"),i),Xt,Dt,Zi,Ht,Ki,Qr=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Xr(e){return`
    ${L.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Qr}</slot>
  `}var Wn=class extends L{constructor(){super(...arguments),mi(this,Dt),mi(this,Ht),mi(this,Xt,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_SUBTITLES_LIST&&t!==i?bt(this,Dt,Zi).call(this):e===l.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",bt(this,Dt,Zi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",bt(this,Ht,Ki))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",bt(this,Ht,Ki))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Wa(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Ba(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Wa(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Ba(this,l.MEDIA_SUBTITLES_SHOWING,e)}};Xt=new WeakMap;Dt=new WeakSet;Zi=function(){var e;const t=Fr(this,Xt)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(l.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;Yr(this,Xt,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,n=Ze({type:"radio",text:this.formatMenuItemText(b("Off")),value:"off",checked:a});n.prepend(ve(this,"checked-indicator")),this.defaultSlot.append(n);const r=this.mediaSubtitlesList;for(const s of r){const o=Ze({type:"radio",text:this.formatMenuItemText(s.label,s),value:Vi(s),checked:this.value==Vi(s)});o.prepend(ve(this,"checked-indicator")),((e=s.kind)!=null?e:"subs")==="captions"&&o.append(ve(this,"captions-indicator")),this.defaultSlot.append(o)}};Ht=new WeakSet;Ki=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(l.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new d.CustomEvent($e.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new d.CustomEvent($e.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Wn.getTemplateHTML=Xr;var Wa=(e,t)=>{const i=e.getAttribute(t);return i?Nn(i):[]},Ba=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Pn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",Wn);var Jr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,jr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function es(){return`
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
  `}function ts(){return b("Captions")}var Ua=e=>{e.setAttribute("data-captions-enabled",zr(e).toString())},$a=e=>{e.setAttribute("aria-label",b("closed captions"))},pa=class extends Ge{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING,l.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),$a(this),Ua(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_SUBTITLES_SHOWING?Ua(this):e===l.MEDIA_LANG&&$a(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=y(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Va(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Za(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Va(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Za(this,l.MEDIA_SUBTITLES_SHOWING,e)}};pa.getSlotTemplateHTML=es;pa.getTooltipContentHTML=ts;var Va=(e,t)=>{const i=e.getAttribute(t);return i?Nn(i):[]},Za=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Pn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",pa);var Bn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},g=(e,t,i)=>(Bn(e,t,"read from private field"),i?i.call(e):t.get(e)),Qe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Et=(e,t,i,a)=>(Bn(e,t,"write to private field"),t.set(e,i),i),Le,Me,Jt,he,W,Y,Un=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){Qe(this,W),Qe(this,Le,void 0),Qe(this,Me,void 0),Qe(this,Jt,void 0),Qe(this,he,new Set),Et(this,Le,e),Et(this,Me,t),Et(this,Jt,new Set(i))}[Symbol.iterator](){return g(this,W,Y).values()}get length(){return g(this,W,Y).size}get value(){var e;return(e=[...g(this,W,Y)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Et(this,he,new Set),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...g(this,W,Y)][e]}values(){return g(this,W,Y).values()}forEach(e,t){g(this,W,Y).forEach(e,t)}add(...e){var t,i;e.forEach(a=>g(this,he).add(a)),!(this.value===""&&!((t=g(this,Le))!=null&&t.hasAttribute(`${g(this,Me)}`)))&&((i=g(this,Le))==null||i.setAttribute(`${g(this,Me)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>g(this,he).delete(i)),(t=g(this,Le))==null||t.setAttribute(`${g(this,Me)}`,`${this.value}`)}contains(e){return g(this,W,Y).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};Le=new WeakMap;Me=new WeakMap;Jt=new WeakMap;he=new WeakMap;W=new WeakSet;Y=function(){return g(this,he).size?g(this,he):g(this,Jt)};var is=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ee=(e,t,i)=>(is(e,t,"read from private field"),i?i.call(e):t.get(e)),as=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Q,pi={RATES:"rates"},$n=[1,1.2,1.5,1.7,2],He=1;function ie(e){return Math.round(e*100)/100}function ns(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate?ie(+e.mediaplaybackrate):He}x</slot>
  `}function rs(){return b("Playback rate")}var va=class extends ge{constructor(){var e;super(),as(this,Q,new Un(this,pi.RATES,{defaultValue:$n})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ie((e=this.mediaPlaybackRate)!=null?e:He)}x`}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,pi.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===pi.RATES&&(Ee(this,Q).value=i),e===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,n=ie(Number.isNaN(a)?He:a);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",b("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Ee(this,Q)}set rates(e){e?Array.isArray(e)?Ee(this,Q).value=e.join(" "):typeof e=="string"&&(Ee(this,Q).value=e):Ee(this,Q).value=""}get mediaPlaybackRate(){return fe(this,l.MEDIA_PLAYBACK_RATE,He)}set mediaPlaybackRate(e){Ve(this,l.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(Ee(this,Q).values(),r=>+r).sort((r,s)=>r-s),a=(t=(e=i.find(r=>r>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:He,n=new d.CustomEvent($e.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(n)}};Q=new WeakMap;va.getSlotTemplateHTML=ns;va.getTooltipContentHTML=rs;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",va);var Vn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ce=(e,t,i)=>(Vn(e,t,"read from private field"),i?i.call(e):t.get(e)),vi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},_e=(e,t,i)=>(Vn(e,t,"access private method"),i),X,xe,tt,Ot,Gi,fi={RATES:"rates"},ss=class extends L{constructor(){super(),vi(this,xe),vi(this,Ot),vi(this,X,new Un(this,fi.RATES,{defaultValue:$n})),_e(this,xe,tt).call(this)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,fi.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===l.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,_e(this,xe,tt).call(this)):e===fi.RATES&&t!=i&&(Ce(this,X).value=i,_e(this,xe,tt).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",_e(this,Ot,Gi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",_e(this,Ot,Gi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-playback-rate-menu-button")}get rates(){return Ce(this,X)}set rates(e){e?Array.isArray(e)?Ce(this,X).value=e.join(" "):typeof e=="string"&&(Ce(this,X).value=e):Ce(this,X).value="",_e(this,xe,tt).call(this)}get mediaPlaybackRate(){return fe(this,l.MEDIA_PLAYBACK_RATE,He)}set mediaPlaybackRate(e){Ve(this,l.MEDIA_PLAYBACK_RATE,e)}};X=new WeakMap;xe=new WeakSet;tt=function(){this.defaultSlot.textContent="";const e=ie(this.mediaPlaybackRate),t=new Set(Array.from(Ce(this,X)).map(a=>ie(Number(a))));e>0&&!t.has(e)&&t.add(e);const i=Array.from(t).sort((a,n)=>a-n);for(const a of i){const n=Ze({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});n.prepend(ve(this,"checked-indicator")),this.defaultSlot.append(n)}};Ot=new WeakSet;Gi=function(){if(!this.value)return;const e=new d.CustomEvent($e.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",ss);var Nt=1;function os(e){return`
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
    <slot name="icon">${e.mediaplaybackrate?ie(+e.mediaplaybackrate):Nt}x</slot>
  `}function ls(){return b("Playback rate")}var fa=class extends Ge{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ie((e=this.mediaPlaybackRate)!=null?e:Nt)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,n=ie(Number.isNaN(a)?Nt:a);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",b("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return fe(this,l.MEDIA_PLAYBACK_RATE,Nt)}set mediaPlaybackRate(e){Ve(this,l.MEDIA_PLAYBACK_RATE,e)}};fa.getSlotTemplateHTML=os;fa.getTooltipContentHTML=ls;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",fa);var ga=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},B=(e,t,i)=>(ga(e,t,"read from private field"),i?i.call(e):t.get(e)),_t=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ka=(e,t,i,a)=>(ga(e,t,"write to private field"),t.set(e,i),i),ke=(e,t,i)=>(ga(e,t,"access private method"),i),it,D,Ie,at,Pt,qi,ds=class extends L{constructor(){super(...arguments),_t(this,Ie),_t(this,Pt),_t(this,it,[]),_t(this,D,{})}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_LIST,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT,l.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){const i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){const a=e.bitrate/1e6,n=`${a.toFixed(a<1?1:0)} Mbps`;return`${i} (${n})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?((i=t.bitrate)!=null?i:0)-((a=e.bitrate)!=null?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case l.MEDIA_RENDITION_SELECTED:this.value=i??"auto",ke(this,Ie,at).call(this);break;case l.MEDIA_RENDITION_LIST:Ka(this,it,or(i)),ke(this,Ie,at).call(this);break;case l.MEDIA_HEIGHT:case l.MEDIA_WIDTH:ke(this,Ie,at).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ke(this,Pt,qi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ke(this,Pt,qi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:y(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return B(this,it)}set mediaRenditionList(e){Ka(this,it,e),ke(this,Ie,at).call(this)}get mediaRenditionSelected(){return Z(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){te(this,l.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return fe(this,l.MEDIA_HEIGHT)}set mediaHeight(e){Ve(this,l.MEDIA_HEIGHT,e)}get mediaWidth(){return fe(this,l.MEDIA_WIDTH)}set mediaWidth(e){Ve(this,l.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};it=new WeakMap;D=new WeakMap;Ie=new WeakSet;at=function(){const e=!this.mediaRenditionSelected;if(B(this,D).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&B(this,D).mediaHeight===this.mediaHeight&&B(this,D).mediaWidth===this.mediaWidth&&B(this,D).isAuto===e)return;B(this,D).mediaRenditionList=JSON.stringify(this.mediaRenditionList),B(this,D).mediaHeight=this.mediaHeight,B(this,D).mediaWidth=this.mediaWidth,B(this,D).isAuto=e;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=t.find(s=>s.id===this.mediaRenditionSelected);for(const s of t)s.selected=s===i;this.defaultSlot.textContent="";for(const s of t){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),m=Ze({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!e});m.prepend(ve(this,"checked-indicator")),this.defaultSlot.append(m)}const a=i&&this.showRenditionBitrate(i);let n;e&&(i?n=this.formatMenuItemText(`${b("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(n=this.formatMenuItemText(`${b("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),n||(n=this.formatMenuItemText(b("Auto")));const r=Ze({type:"radio",text:n,value:"auto",checked:e});r.dataset.description=n,r.prepend(ve(this,"checked-indicator")),this.defaultSlot.append(r)};Pt=new WeakSet;qi=function(){if(this.value==null)return;const e=new d.CustomEvent($e.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",ds);var us=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function cs(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${us}</slot>
  `}function hs(){return b("Quality")}var ba=class extends Ge{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",b("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:y(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return Z(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){te(this,l.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return fe(this,l.MEDIA_HEIGHT)}set mediaHeight(e){Ve(this,l.MEDIA_HEIGHT,e)}};ba.getSlotTemplateHTML=cs;ba.getTooltipContentHTML=hs;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",ba);var Ea=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},H=(e,t,i)=>(Ea(e,t,"read from private field"),i?i.call(e):t.get(e)),x=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Zn=(e,t,i,a)=>(Ea(e,t,"write to private field"),t.set(e,i),i),S=(e,t,i)=>(Ea(e,t,"access private method"),i),Ke,ht,li,de,Oe,_a,Kn,Wt,zi,Bt,Fi,Gn,jt,ei,Ut;function ms(e){return`
      ${L.getTemplateHTML(e)}
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
    `}var qn=class extends L{constructor(){super(),x(this,ht),x(this,de),x(this,_a),x(this,Wt),x(this,Fi),x(this,Ke,!1),x(this,Bt,e=>{const t=e.target,i=t?.nodeName==="VIDEO",a=S(this,Wt,zi).call(this,t);(i||a)&&(H(this,Ke)?S(this,de,Oe).call(this):S(this,Fi,Gn).call(this,e))}),x(this,jt,e=>{const t=e.target,i=this.contains(t),a=e.button===2,n=t?.nodeName==="VIDEO",r=S(this,Wt,zi).call(this,t);i||a&&(n||r)||S(this,de,Oe).call(this)}),x(this,ei,e=>{e.key==="Escape"&&S(this,de,Oe).call(this)}),x(this,Ut,e=>{var t,i;const a=e.target;if((t=a.matches)!=null&&t.call(a,'button[invoke="copy"]')){const n=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}S(this,de,Oe).call(this)}),this.setAttribute("noautohide",""),S(this,ht,li).call(this)}connectedCallback(){super.connectedCallback(),y(this).addEventListener("contextmenu",H(this,Bt)),this.addEventListener("click",H(this,Ut))}disconnectedCallback(){super.disconnectedCallback(),y(this).removeEventListener("contextmenu",H(this,Bt)),this.removeEventListener("click",H(this,Ut)),document.removeEventListener("mousedown",H(this,jt)),document.removeEventListener("keydown",H(this,ei))}};Ke=new WeakMap;ht=new WeakSet;li=function(){this.hidden=!H(this,Ke)};de=new WeakSet;Oe=function(){Zn(this,Ke,!1),S(this,ht,li).call(this)};_a=new WeakSet;Kn=function(){document.querySelectorAll("media-context-menu").forEach(t=>{var i;t!==this&&S(i=t,de,Oe).call(i)})};Wt=new WeakSet;zi=function(e){return e?e.hasAttribute("slot")&&e.getAttribute("slot")==="media"?!0:e.nodeName.includes("-")&&e.tagName.includes("-")?e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline"):!1:!1};Bt=new WeakMap;Fi=new WeakSet;Gn=function(e){e.preventDefault(),S(this,_a,Kn).call(this),Zn(this,Ke,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,S(this,ht,li).call(this),document.addEventListener("mousedown",H(this,jt),{once:!0}),document.addEventListener("keydown",H(this,ei),{once:!0})};jt=new WeakMap;ei=new WeakMap;Ut=new WeakMap;qn.getTemplateHTML=ms;d.customElements.get("media-context-menu")||d.customElements.define("media-context-menu",qn);function ps(e){return`
    ${ae.getTemplateHTML.call(this,e)}
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
  `}var ka=class extends ae{};ka.shadowRootOptions={mode:"open"};ka.getTemplateHTML=ps;d.customElements.get("media-context-menu-item")||d.customElements.define("media-context-menu-item",ka);var Yi=Jn.createElement("template");"innerHTML"in Yi&&(Yi.innerHTML=Yn);var Ga,qa,zn=class extends ti{};zn.template=(qa=(Ga=Yi.content)==null?void 0:Ga.children)==null?void 0:qa[0];ya.customElements.get("media-theme-news")||ya.customElements.define("media-theme-news",zn);
