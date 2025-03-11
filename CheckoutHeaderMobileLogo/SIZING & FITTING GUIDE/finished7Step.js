const style = document.createElement('style');
style.textContent = `
    .cms-bobux-sizing-and-fitting-guide .size-fitting-wrapper,
    .cms-bobux-sizing-and-fitting-guide .right-size-wrapper,
    .cms-bobux-sizing-and-fitting-guide .stage-range,
    .cms-bobux-sizing-and-fitting-guide .comfort-wrapper {
        h2, h1 {
            font-size: 40px;
            letter-spacing: 2px;
            margin: 0 auto 40px;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 1.1;
            max-width: 830px !important;
            text-align: center;
        }
        h1 {
            font-size: 70px;
            max-width: 100% !important;
        }

        h3 {
            margin: 20px auto;
            font-size: 16px;
            text-transform: uppercase;
            color: #171E26;
            letter-spacing: 1.6px;
            line-height: 1.1;
            font-weight: 600;
            height: 30px;
        }

        h4 {
            margin: 0 auto 20px;
            font-size: 14px;
            text-transform: uppercase;
            color: #526240;
            letter-spacing: 1.6px;
            line-height: 1.1;
            max-width: 830px !important;
            text-align: center;
        }

        h5 {
            font-size: 30px;
            letter-spacing: 2px;
            margin: 20px auto;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 1.1;
            max-width: 830px !important;
            text-align: center;
        }

        p {
            text-align: center;
            font-size: 14px;
            letter-spacing: 0.5px;
            font-style: normal;
            font-weight: 400;
            max-width: 645px;
            line-height: 1.8;
            margin: auto;
        }

        .tab-slider-wrapper [class*="Tap-module_wrapper"] {
            background: #f9efe6;
            padding: 20px;
        }

        [data-testid="carousel"] {
            width: 100% !important;

            [class*="Tap-module_headingContainer"] {
                width: 100%;
            }

            [class*="Tap-module_heading"] {
                white-space: nowrap;
                justify-content: space-between;
            }

            .react-multi-carousel-track .pagebuilder-column-group {
                padding-top: 20px;
            }
        }
    }

    .cms-bobux-sizing-and-fitting-guide .cms-page-content {
        [data-content-type="row"] {
            padding-bottom: 40px;
        }
    }
    .using-pen-steps > div {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(119px, 288px));
        gap: 10px;
        justify-content: center;
    }

    .using-pen-steps > div > * {
        width: 100% !important;
    }

    /* Responsive adjustments for smaller screens */
    @media only screen and (max-width: 959px) {
        .cms-bobux-sizing-and-fitting-guide .size-fitting-wrapper,
        .cms-bobux-sizing-and-fitting-guide .right-size-wrapper,
        .cms-bobux-sizing-and-fitting-guide .stage-range,
        .cms-bobux-sizing-and-fitting-guide .comfort-wrapper {
            h2, h1 {
                font-size: 30px;
            }

            h3 {
                font-size: 14px;
                letter-spacing: 1px;
                height: auto;
            }

            h4 {
                font-size: 12px;
            }

            h5 {
                font-size: 18px;
                margin: 10px auto;
            }

            p {
                font-size: 12px;
                line-height: 1.5;
                max-width: 100%;
            }

            .tab-slider-wrapper [class*="Tap-module_wrapper"] {
                padding: 15px;
            }

            [data-testid="carousel"] {
                [class*="Tap-module_headingContainer"] {
                    width: 100%;
                }
            }
            .size-fit-overview-buttons {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 20px auto;
            }
            .size-fit-overview-buttons > div {
                width: 100%;
            }
            .size-fit-overview-buttons a {
                display: block;
            }
        }
    }

    /* Further responsive adjustments for very small screens */
    @media only screen and (max-width: 480px) {
        .cms-bobux-sizing-and-fitting-guide .size-fitting-wrapper,
        .cms-bobux-sizing-and-fitting-guide .right-size-wrapper,
        .cms-bobux-sizing-and-fitting-guide .stage-range,
        .cms-bobux-sizing-and-fitting-guide .comfort-wrapper {
            h2, h1 {
                font-size: 24px;
            }

            h3 {
                font-size: 12px;
            }

            h4 {
                font-size: 10px;
            }

            h5 {
                font-size: 16px;
                margin: 5px auto;
            }

            p {
                font-size: 10px;
                line-height: 1.4;
                max-width: 100%;
            }

            .tab-slider-wrapper [class*="Tap-module_wrapper"] {
                padding: 10px;
            }
        }
    }

`;
document.head.appendChild(style);
console.log('Custom styles updated successfully!');
