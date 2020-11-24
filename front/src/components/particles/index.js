import React from 'react';
import Particles from 'react-particles-js';
import { green } from '@material-ui/core/colors';

const CustomParticles = ({ color = green.A400 }) => {
  return (
    <Particles 
      params={{
        particles: {
        color: {
          value: color
        },
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1000
          }
        },
          line_linked: {
            enable: false,
            color: "#000000"
          },
          size: {
            value: 10,
            random: true
          },
          move: {
            direction: 'none',
            outMode: 'out',
            random: true,
            speed: 1.5
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'connect'
            },
            onDiv: {
              enable: true,
              mode: "trail"
            }
          },
          modes: {

            connect: {
              distance: 1000,
              radius: 120,
              lineLinked: {
                opacity: 0.2
              }
            },
            trail: {
              quantity: 2,
              particles: {
                twinkle: true,
                collisions: false,
                reduceDuplicates: true,
                size: 600
              }
            }
          }
        }
      }}
      style={{
        width: '100%',
        position: 'fixed',
        margin: '0 auto',
        left: 0,
        right: 0,
      }}
        />
  )
}

export default CustomParticles;