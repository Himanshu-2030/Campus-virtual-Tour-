// ===========================================
// pannellum viewer section
// ===========================================
// alert for playing audio 

alert("After the view loads, simply tap anywhere in the view to start the audio. Make sure you have a stable internet connection.");

// Create a Pannellum viewer, targeting an element with ID 'panorama', and passing in an options object as the second argument
 var viewer = pannellum.viewer('panorama', {
    // Define the default settings for all scenes   
    "default": {
        "firstScene": "entry",
        "sceneFadeDuration": 1000,
        "autoLoad":true,
    },
// Define the individual scenes within the panorama
    "scenes": {
         // Define the first scene, called 'entry'
        "entry": {
            "title": "Welcome to SSTC Virtual Tour",
            "hfov": 130,
            "pitch": 5,
            "yaw": -6,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/4xgwY16.jpg",
           
 // Add hotspots to this scene
            "hotSpots": [
                
                {
                    "pitch": -2.118,
                    "yaw": -3.241,
                    "type": "scene",
                    "text": "Enter",
                    "sceneId": "temple",
                    },
                {
                    "pitch": -7.54,
                    "yaw": -30.2,
                    "type": "info",
                    "text": "Location",
                    "URL": "https://goo.gl/maps/X6f4BcKqFiAhSRjf9 ",
                    
                }
            ]
        },
        // Add more scenes here, following the same format as 'entry'
        "temple": {
            "title": "Temple",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/dDdfu0b.jpg",
            "hotSpots": [
                {
                    "pitch": -17,
                    "yaw": -4,
                    "type": "info",
                    "text": "A religious building that's meant for worshipping or praying",
                    
                },
                {
                    "pitch": 0.913,
                    "yaw": -2.5,
                    "type": "scene",
                    "text": "Visit",
                    "sceneId": "temple-in",
                },

                {
                    "pitch":  -0.3480,
                    "yaw": -85.8,
                    "type": "scene",
                    "text": "shops",
                    "sceneId": "shop",
                },
                
                {
                    "pitch":  -3.8127,
                    "yaw": 87.062,
                    "type": "scene",
                    "sceneId": "entry",
                    "text": "Exit",
                    "targetYaw": -23,
                    "targetPitch": 2,
                   
                }
            ]
        },

        "temple-in": {
            "title": "Temple",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/xz3anEW.jpg",
            "hotSpots": [
                {
                    "pitch": -19.1572,
                    "yaw": 178.26,
                    "type": "scene",
                    "text": "Exit",
                    "sceneId": "temple"
                }

            ]
        },
        "shop": {
            "title": "Hostel",
            "hfov": 110,
            "pitch": -3,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/vvmeoC1.jpeg",
            "hotSpots": [
            {
                    "pitch": -3.772,
                    "yaw": -143.99,
                    "type": "scene",
                    "text":"Back",
                    "sceneId": "entry",
                },
                {
                    "pitch": 8,
                    "yaw": -8.1,
                    "type": "info",
                    "text": "Central Library",
                },
                {
                    "pitch": 4,
                    "yaw": 180,
                    "type": "info",
                    "text":"Boys Hostel",
                },
                 {
                    "pitch": -7.793,
                    "yaw": 54,
                    "type": "scene",
                    "text":"Canteen",
                    "sceneId": "canteen",
                },
               
     
                {
                    "pitch": -4,
                    "yaw": -36,
                    "type": "scene",
                    "text":"Administrative Block",
                    "sceneId": "administrative-block",
                }

            ]
        },
        "administrative-block": {
            "title": "Administrative Block",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
           
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/VLaaWjP.jpeg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Main Ground",
                    "sceneId": "main-ground",
                },
               
                {
                    "pitch": -0.63,
                    "yaw": 179,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "shop",
                }

            ]
        },
        "main-ground": {
            "title": "Ground",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/jBJNKmb.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -179,
                    "type": "scene",
                    "text": "Administrative Block",
                    "sceneId": "administrative-block",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": 108,
                    "type": "scene",
                    "text": "Road",
                    
                    "sceneId": "first-road",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "first-road": {
            "title": "Road",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/Z76W6HO.jpeg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 138,
                    "type": "scene",
                    "text": "Main Ground",
                    "sceneId": "main-ground",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -12,
                    "yaw": -150,
                    "type": "scene",
                    "text": "CSE Block",
                    "sceneId": "cse",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "cse": {
            "title": "CSE Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/G35WV1y.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": -0.9,
                    "type": "scene",
                    "text": "back",
                    "sceneId": "first-road",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -4,
                    "yaw": 90,
                    "type": "scene",
                    "text": "CSE Block",
                    "sceneId": "cse-in",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -6,
                    "yaw": 173,
                    "type": "scene",
                    "text": "ETC Block",
                    "sceneId": "etc",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -1.1,
                    "yaw": -142,
                    "type": "scene",
                    "text": "Park",
                    "sceneId": "cse-front-park",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "cse-in": {
            "title": "CSE Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/KS4AXBS.jpg",
            "hotSpots": [
                {
                    "pitch": -8,
                    "yaw": -175,
                    "type": "scene",
                    "text": "exit",
                    "sceneId": "cse",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "cse-front-park": {
            "title": "Park",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/p5MEzrb.jpg",
            "hotSpots": [
                {
                    "pitch": 1.29,
                    "yaw": 110,
                    "type": "scene",
                    "text": "CSE Block",
                    "sceneId": "cse",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1.5,
                    "yaw": -158,
                    "type": "scene",
                    "text": "ETC Block",
                    "sceneId": "etc",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": -79,
                    "type": "scene",
                    "text": "Mech Block",
                    "sceneId": "mech",
                    "targetYaw": -23,
                    "targetPitch": 2
                }


            ]
        },
        "etc": {
            "title": "ETC Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/RJWnpOi.jpg",
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -39,
                    "type": "scene",
                    "text": "Park",
                    "sceneId": "cse-front-park",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -1.3,
                    "yaw": 176,
                    "type": "scene",
                    "text": "workshop",
                    "sceneId": "near-workshop",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "near-workshop": {
            "title": "Workshop",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/ePcQaZT.jpg",
            "hotSpots": [
                {
                    "pitch": 2.3,
                    "yaw": 1.95,
                    "type": "scene",
                    "text": "ETC Block",
                    "sceneId": "etc",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -1.6,
                    "yaw": -88,
                    "type": "scene",
                    "text": "Civil Block",
                    "sceneId": "civil",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "civil": {
            "title": "Civil Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/5qGEIMn.jpg",
            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": 47.1,
                    "type": "scene",
                    "text": "Road",
                    "sceneId": "main-road",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -5,
                    "yaw": 156,
                    "type": "scene",
                    "text": "Workshop",
                    "sceneId": "near-workshop",
                    "targetYaw": -23,
                    "targetPitch": 2
                }


            ]
        },
        "main-road": {
            "title": "Road",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/iLNztss.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": -2.8,
                    "type": "scene",
                    "text": "Canteen",
                    "sceneId": "canteen",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 2,
                    "yaw": 168,
                    "type": "scene",
                    "text": "Civil Block",
                    "sceneId": "civil",
                    "targetYaw": -23,
                    "targetPitch": 2
                },

            ]
        },
        "canteen": {
            "title": "Canteen",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/MfBXvo0.jpg",
            "hotSpots": [
            {
                    "pitch": -1.79,
                    "yaw": -101,
                    "type": "scene",
                    "text": "Road",
                    "sceneId": "main-road",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1.832,
                    "yaw": -48.71,
                    "type": "scene",
                    "text": " Student Parking",
                    "sceneId": "parking",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -0.7,
                    "yaw": 6.4,
                    "type": "scene",
                    "text": " Canteen",
                    "sceneId": "canteen-in",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -3.14,
                    "yaw": 80,
                    "type": "scene",
                    "text": " Shop",
                    "sceneId": "shop",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": .189,
                    "yaw": 109,
                    "type": "scene",
                    "text": "Faculty of Management",
                    "sceneId": "f1-in",
                    "targetYaw": -23,
                    "targetPitch": 2
                }



            ]
        },
        "canteen-in": {
            "title": "Canteen",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/tFXPpiS.jpg",
            "hotSpots": [
                
                {
                    "pitch": -14,
                    "yaw": -4,
                    "type": "scene",
                    "text": " Canteen",
                    "sceneId": "canteen",
                    "targetYaw": -23,
                    "targetPitch": 2
                }


            ]
        },
        "parking": {
            "title": "Student Parking",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/PkY19UK.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -157,
                    "type": "scene",
                    "text": "Canteen",
                    "sceneId": "canteen",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        
        "mech": {
            "title": "Mech Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/A7kX95l.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -173,
                    "type": "scene",
                    "text": "Park",
                    "sceneId": "cse-front-park",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        },
        "f1-in": {
            "title": "First Year Block",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/ddLWhoW.jpg",
            "hotSpots": [
                {
                    "pitch": -3.5,
                    "yaw":-73,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "canteen",
                    "targetYaw": -23,
                    "targetPitch": 2
                }

            ]
        }
    },
    });

//     -----------------------------
// sound section here
// -----------------------------



// Declare an object containing mappings of scene names to their corresponding audio ids
const sceneAudioMap = {
  'entry': 'entry',
  'temple': 'temple',
  'temple-in': 'temple-in',
  'shop': 'shops',
  'administrative-block': 'admin',
  'main-ground': 'ground',
  'first-road': 'first-road',
  'cse': 'cse',
  'cse-in': 'cse-in',
  'cse-front-park': 'park',
  'etc': 'etc',
  'near-workshop': 'workshop',
  'civil': 'civil',
//   'main-road': '',
  'canteen': 'canteen',
  'canteen-in': 'canteen-in',
  'parking': 'parking',
  'mech': 'mech',
  'f1-in': 'cse-in',

  // add more scenes and their corresponding audio IDs here
};



// Declare a variable to store the current audio element being played
let currentAudioElement;

// Function to play audio for the current scene
function playAudioForScene(sceneId) {
    const audioId = sceneAudioMap[sceneId];
    if (audioId) {
      const audioElement = document.getElementById(audioId);
      if (audioElement && audioElement.paused) {
        // Pause and reset the current audio if it exists
        if (currentAudioElement) {
          currentAudioElement.pause();
          currentAudioElement.currentTime = 0;
        }
  
        // Check if the document has received user interaction
        if (hasUserInteracted()) {
          audioElement.play();
          currentAudioElement = audioElement;
        } else {
          // Set up an event listener to play audio on user interaction
          document.addEventListener('click', function onUserInteraction() {
            audioElement.play();
            currentAudioElement = audioElement;
            document.removeEventListener('click', onUserInteraction);
          });
        }
      }
    }
  }
  
  // Function to check if the document has received user interaction
  function hasUserInteracted() {
    return document.documentElement.classList.contains('user-interacted');
  }
  
  // Set up an event listener to mark the document as having received user interaction
  document.addEventListener('click', function markUserInteracted() {
    document.documentElement.classList.add('user-interacted');
    document.removeEventListener('click', markUserInteracted);
  });
  
  // Listen for scene change event on viewer
  viewer.on('scenechange', function(event) {
    // Check if the event object and its 'scene' property are defined
    if (event && event.scene) {
      playAudioForScene(event.scene.id);
    }
  });
  
  // Trigger audio play for the initial scene after viewer is loaded
  viewer.on('load', function() {
    // Check if the viewer object and its 'getScene' method are defined
    if (viewer && viewer.getScene) {
      playAudioForScene(viewer.getScene());
    }
  });
  





