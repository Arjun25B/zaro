import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-[85vh] pt-24 pb-20 bg-white text-slate-800 flex flex-col justify-center items-center px-4 sm:px-6 select-none">
      <div class="max-w-4xl w-full mx-auto flex flex-col items-center">
        <!-- Main Heading from Reference -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-normal sm:font-medium text-slate-700 tracking-tight text-center mb-6 sm:mb-10">
          We could not find the page you are looking for
        </h1>

        <!-- Whimsical Illustrated 404 with Searchers (FlowMapp Style) -->
        <div class="w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center my-2">
          <svg
            viewBox="0 0 800 480"
            class="w-full h-auto max-h-[420px] drop-shadow-xs"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="404 illustration with explorer characters searching for the missing page"
          >
            <defs>
              <!-- Soft Slate-Blue Fill Gradient for the 404 Numbers -->
              <linearGradient id="numFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#CFE0ED" />
                <stop offset="100%" stop-color="#B2CEDB" />
              </linearGradient>

              <!-- Dot Pattern for Pajamas / Outfits -->
              <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1" fill="#7B9EBA" opacity="0.6" />
              </pattern>

              <!-- Grass Blade Gradient -->
              <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#A8D5BA" />
                <stop offset="100%" stop-color="#84BA99" />
              </linearGradient>
            </defs>

            <!-- ================= SKY & CLOUDS ================= -->
            <!-- Hand-drawn style fluffy clouds in background -->
            <path
              d="M 370 125 C 370 112 380 102 393 102 C 397 102 402 104 405 107 C 411 96 424 90 436 94 C 446 97 453 106 454 116 C 460 116 466 122 466 128 C 466 135 460 140 453 140 L 378 140 C 373 140 370 133 370 125 Z"
              stroke="#8BA9C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#F4F8FB"
              opacity="0.85"
            />
            <path
              d="M 505 160 C 505 152 512 145 520 145 C 523 145 526 146 528 148 C 532 140 541 136 549 139 C 556 141 561 147 562 154 C 566 154 570 158 570 162 C 570 167 566 170 561 170 L 510 170 C 507 170 505 165 505 160 Z"
              stroke="#8BA9C0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#F4F8FB"
              opacity="0.75"
            />

            <!-- Distant Flying Birds (Two hand-drawn 'v' arcs) -->
            <path d="M 290 135 Q 295 130 300 135 Q 305 130 310 135" stroke="#7A9BB3" stroke-width="1.8" stroke-linecap="round" fill="none" />
            <path d="M 470 158 Q 474 153 478 158 Q 482 153 486 158" stroke="#7A9BB3" stroke-width="1.8" stroke-linecap="round" fill="none" />

            <!-- ================= MAIN 404 NUMBERS ================= -->

            <!-- NUMBER 1: First "4" -->
            <!-- Base polygon for digit 4 with outer outline and inner cutout -->
            <path
              d="M 270 140 L 270 295 L 315 295 L 315 340 L 270 340 L 270 400 L 225 400 L 225 340 L 140 340 L 140 290 L 225 140 Z M 225 210 L 175 295 L 225 295 Z"
              fill="url(#numFill)"
              stroke="#58809E"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round"
            />

            <!-- NUMBER 2: Middle "0" (Tall oval with inner cutout) -->
            <path
              d="M 400 140 C 448 140 485 185 485 270 C 485 355 448 400 400 400 C 352 400 315 355 315 270 C 315 185 352 140 400 140 Z M 400 188 C 375 188 358 220 358 270 C 358 320 375 352 400 352 C 425 352 442 320 442 270 C 442 220 425 188 400 188 Z"
              fill="url(#numFill)"
              stroke="#58809E"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round"
            />

            <!-- NUMBER 3: Second "4" -->
            <path
              d="M 625 140 L 625 295 L 670 295 L 670 340 L 625 340 L 625 400 L 580 400 L 580 340 L 495 340 L 495 290 L 580 140 Z M 580 210 L 530 295 L 580 295 Z"
              fill="url(#numFill)"
              stroke="#58809E"
              stroke-width="3"
              stroke-linejoin="round"
              stroke-linecap="round"
            />

            <!-- ================= CHARACTER 1: Sitting in the first "4" ================= -->
            <!-- Explorer seated on horizontal bar of first 4, hand shading eyes looking left -->
            <g id="explorer-sitting">
              <!-- Legs dangling down from the crossbar -->
              <!-- Left leg -->
              <path d="M 210 325 L 210 375 Q 210 385 204 388 Q 198 385 200 375 L 202 325 Z" fill="#F8FAFC" stroke="#486D88" stroke-width="2.2" stroke-linejoin="round" />
              <!-- Right leg -->
              <path d="M 226 325 L 226 378 Q 226 388 232 390 Q 238 386 236 376 L 234 325 Z" fill="#F8FAFC" stroke="#486D88" stroke-width="2.2" stroke-linejoin="round" />
              <!-- Little shoes -->
              <path d="M 197 384 C 197 380 205 380 207 386 C 208 391 199 393 197 384 Z" fill="#486D88" />
              <path d="M 229 385 C 229 380 237 380 239 386 C 240 391 231 393 229 385 Z" fill="#486D88" />

              <!-- Torso / Pajama body with pattern -->
              <path
                d="M 196 270 Q 218 266 238 270 L 236 328 Q 216 332 196 328 Z"
                fill="#FFFFFF"
                stroke="#486D88"
                stroke-width="2.2"
                stroke-linejoin="round"
              />
              <path
                d="M 196 270 Q 218 266 238 270 L 236 328 Q 216 332 196 328 Z"
                fill="url(#dotPattern)"
              />

              <!-- Left Arm resting on knee -->
              <path d="M 234 275 Q 248 295 242 320" stroke="#486D88" stroke-width="2.2" stroke-linecap="round" fill="none" />
              <circle cx="242" cy="321" r="3.5" fill="#FADBC8" stroke="#486D88" stroke-width="1.8" />

              <!-- Right Arm bent up to forehead shielding eyes -->
              <path d="M 200 278 Q 186 260 186 242 Q 186 234 200 234" stroke="#486D88" stroke-width="2.2" stroke-linecap="round" fill="none" />
              <!-- Hand at forehead -->
              <path d="M 198 233 Q 206 230 214 233" stroke="#486D88" stroke-width="2.5" stroke-linecap="round" />

              <!-- Head & Neck -->
              <path d="M 212 268 L 212 260" stroke="#486D88" stroke-width="2" />
              <!-- Head shape -->
              <circle cx="218" cy="245" r="15" fill="#FADBC8" stroke="#486D88" stroke-width="2.2" />
              <!-- Red/Ginger hair tuft -->
              <path d="M 210 236 Q 218 226 230 232 Q 224 240 210 236 Z" fill="#E26D50" stroke="#486D88" stroke-width="1.8" />
              <!-- Facial features looking left -->
              <circle cx="211" cy="244" r="1.8" fill="#334E68" />
              <path d="M 206 247 Q 203 249 206 251" stroke="#486D88" stroke-width="1.8" stroke-linecap="round" fill="none" />
            </g>

            <!-- ================= CHARACTER 2: Looking through Binoculars in the "0" ================= -->
            <!-- Explorer standing/leaning inside the 0, holding binoculars with both hands -->
            <g id="explorer-binoculars">
              <!-- Body / Torso emerging from inside the 0 -->
              <path
                d="M 388 285 Q 405 280 422 285 L 420 340 Q 405 344 388 340 Z"
                fill="#FFFFFF"
                stroke="#486D88"
                stroke-width="2.2"
                stroke-linejoin="round"
              />
              <path
                d="M 388 285 Q 405 280 422 285 L 420 340 Q 405 344 388 340 Z"
                fill="url(#dotPattern)"
              />

              <!-- Head -->
              <circle cx="405" cy="246" r="16" fill="#FADBC8" stroke="#486D88" stroke-width="2.2" />
              <!-- Explorer Blue Cap -->
              <path d="M 392 240 Q 405 228 420 238 L 426 241 Q 418 243 400 243 Z" fill="#0070F3" stroke="#486D88" stroke-width="2" />

              <!-- Left Arm holding binoculars -->
              <path d="M 390 292 Q 378 275 388 255" stroke="#486D88" stroke-width="2.4" stroke-linecap="round" fill="none" />
              <!-- Right Arm holding binoculars -->
              <path d="M 420 292 Q 432 275 422 255" stroke="#486D88" stroke-width="2.4" stroke-linecap="round" fill="none" />

              <!-- Binoculars (Two cylinders viewed from 3/4 angle) -->
              <!-- Left cylinder -->
              <rect x="388" y="246" width="13" height="18" rx="3" fill="#3D5A73" stroke="#253847" stroke-width="1.8" />
              <!-- Right cylinder -->
              <rect x="404" y="246" width="13" height="18" rx="3" fill="#3D5A73" stroke="#253847" stroke-width="1.8" />
              <!-- Lens rims -->
              <ellipse cx="394.5" cy="264" rx="6.5" ry="3" fill="#00D2FF" stroke="#253847" stroke-width="1.5" />
              <ellipse cx="410.5" cy="264" rx="6.5" ry="3" fill="#00D2FF" stroke="#253847" stroke-width="1.5" />
              <!-- Hands gripping cylinders -->
              <circle cx="386" cy="254" r="4" fill="#FADBC8" stroke="#486D88" stroke-width="1.8" />
              <circle cx="419" cy="254" r="4" fill="#FADBC8" stroke="#486D88" stroke-width="1.8" />

              <!-- Lower legs visible behind ground -->
              <path d="M 396 340 L 396 375 L 400 375" stroke="#486D88" stroke-width="2.2" stroke-linecap="round" />
              <path d="M 414 340 L 418 375 L 422 375" stroke="#486D88" stroke-width="2.2" stroke-linecap="round" />
            </g>

            <!-- ================= CHARACTER 3: Crawling with Magnifying Glass in front of second "4" ================= -->
            <!-- Explorer on hands and knees closely inspecting the grass with a magnifying glass -->
            <g id="explorer-crawling">
              <!-- Rear leg & bent knee -->
              <path
                d="M 520 365 Q 512 372 516 388 Q 520 395 530 395 Q 538 385 538 370 Z"
                fill="#F8FAFC"
                stroke="#486D88"
                stroke-width="2.2"
                stroke-linejoin="round"
              />
              <!-- Front crawling leg -->
              <path
                d="M 535 370 Q 542 385 550 392 Q 556 394 560 388 Q 558 378 548 368 Z"
                fill="#F8FAFC"
                stroke="#486D88"
                stroke-width="2.2"
                stroke-linejoin="round"
              />

              <!-- Body / Back arched in crawling posture -->
              <path
                d="M 522 360 Q 535 330 568 335 Q 588 340 594 365 Q 570 380 535 372 Z"
                fill="#FFFFFF"
                stroke="#486D88"
                stroke-width="2.2"
                stroke-linejoin="round"
              />
              <path
                d="M 522 360 Q 535 330 568 335 Q 588 340 594 365 Q 570 380 535 372 Z"
                fill="url(#dotPattern)"
              />

              <!-- Left supporting arm placed firmly on ground -->
              <path d="M 578 355 L 575 388 Q 575 394 570 394" stroke="#486D88" stroke-width="2.4" stroke-linecap="round" fill="none" />

              <!-- Head looking downwards toward ground -->
              <circle cx="600" cy="345" r="14" fill="#FADBC8" stroke="#486D88" stroke-width="2.2" />
              <!-- Blonde Hair -->
              <path d="M 590 338 Q 598 326 612 334 Q 616 342 602 344 Z" fill="#F2C94C" stroke="#486D88" stroke-width="1.8" />
              <!-- Eye looking down -->
              <circle cx="605" cy="347" r="1.6" fill="#334E68" />

              <!-- Right arm extending forward holding magnifying glass -->
              <path d="M 588 358 Q 604 364 614 362" stroke="#486D88" stroke-width="2.4" stroke-linecap="round" fill="none" />
              <!-- Hand -->
              <circle cx="616" cy="362" r="3.5" fill="#FADBC8" stroke="#486D88" stroke-width="1.8" />

              <!-- Magnifying Glass -->
              <!-- Handle -->
              <line x1="617" y1="363" x2="626" y2="370" stroke="#334E68" stroke-width="3" stroke-linecap="round" />
              <!-- Circular lens rim -->
              <circle cx="634" cy="376" r="12" fill="#E8F6FE" fill-opacity="0.65" stroke="#334E68" stroke-width="2.2" />
              <!-- Glass shine reflection -->
              <path d="M 627 372 Q 632 368 638 370" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" fill="none" />
            </g>

            <!-- ================= GROUND BASELINE & GRASS ================= -->
            <!-- Continuous ground baseline beneath digits -->
            <path
              d="M 120 400 L 265 400 M 275 400 L 480 400 M 490 400 L 680 400"
              stroke="#688BA5"
              stroke-width="1.8"
              stroke-linecap="round"
            />

            <!-- Little Grass Tufts sprout along the ground -->
            <!-- Grass 1 near first 4 -->
            <path d="M 160 400 Q 162 388 158 382 M 160 400 Q 165 385 168 380 M 160 400 Q 163 392 168 392" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
            <!-- Grass 2 under first 4 -->
            <path d="M 252 400 Q 250 388 245 384 M 252 400 Q 256 386 260 382 M 252 400 Q 257 392 262 393" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
            <!-- Grass 3 near middle 0 -->
            <path d="M 330 400 Q 332 387 338 382 M 330 400 Q 326 386 322 383" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
            <path d="M 445 400 Q 448 388 454 382 M 445 400 Q 442 386 438 384" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
            <!-- Grass 4 near crawling explorer and second 4 -->
            <path d="M 502 400 Q 505 388 510 383 M 502 400 Q 498 387 494 385" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
            <path d="M 648 400 Q 645 386 640 382 M 648 400 Q 652 385 656 380 M 648 400 Q 653 392 658 393" stroke="#688BA5" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Reference Subtitle with Styled Clickable Links -->
        <p class="text-sm sm:text-base text-slate-500 text-center mt-6 sm:mt-10 font-normal">
          Visit the
          <a
            routerLink="/"
            class="text-[#0070F3] hover:underline font-medium cursor-pointer transition-colors"
          >homepage</a>
          or
          <a
            [routerLink]="['/']"
            fragment="contact"
            class="text-[#0070F3] hover:underline font-medium cursor-pointer transition-colors"
          >contact us</a>
          about the problem
        </p>
      </div>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
