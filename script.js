document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.cat-gallery');
    
    // Sample cat data with Unsplash images
    const cats = [
        {
            name: 'Whiskers',
            description: 'A cream-colored kitten with big blue eyes resting indoors.',
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
          },
          {
            name: 'Mittens',
            description: 'A cute grey kitten with big eyes sitting on a bed.',
            image: 'https://images.pexels.com/photos/290164/pexels-photo-290164.jpeg?cs=srgb&dl=pexels-pixabay-290164.jpg&fm=jpg'
          },
          {
            name: 'Fluffy',
            description: 'Five adorable kittens exploring green grass outdoors.',
            image: 'https://images.pexels.com/photos/1150116/pexels-photo-1150116.jpeg?cs=srgb&dl=pexels-irina-iriser-1150116.jpg&fm=jpg'
          },
          {
            name: 'Shadow',
            description: 'A Scottish Fold kitten sitting on a comfy sofa indoors.',
            image:'https://cdn.discordapp.com/attachments/1358186564034891988/1359921476471623902/white-cat-breeds-TEASER.jpg?ex=67f93d12&is=67f7eb92&hm=f5d2c3a4f3a2c1678629824a428327147ace553f0877d93137aed409841d09e4&'
          }
          {
            name: 'Tiger',
            description: 'An adorable tabby kitten with orange fur looking out a window.',
            image: 'https://images.pexels.com/photos/210421/pexels-photo-210421.jpeg?cs=srgb&dl=pexels-pixabay-210421.jpg&fm=jpg'
          },
          {
            name: 'Luna',
            description: 'A ginger tabby cat grooming itself in soft sunlight.',
            image: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?cs=srgb&dl=pexels-barnabas-hetey-730896.jpg&fm=jpg'
          },
          {
            name: 'Bella',
            description: 'A grey and white kitten being held gently, showing its adorable face.',
            image: 'https://images.pexels.com/photos/1174072/pexels-photo-1174072.jpeg?cs=srgb&dl=pexels-bella-morales-1174072.jpg&fm=jpg'
          },
          {
            name: 'Simba',
            description: 'A playful tabby cat peeking out from behind blue curtains.',
            image: 'https://images.pexels.com/photos/1395082/pexels-photo-1395082.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1395082.jpg&fm=jpg'
          },
          {
            name: 'Nala',
            description: 'A charming white kitten surrounded by colorful Christmas lights.',
            image: 'https://images.pexels.com/photos/12640760/pexels-photo-12640760.jpeg?cs=srgb&dl=pexels-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%BC%D0%B8%D0%BB%D0%BA%D0%B0-12640760.jpg&fm=jpg'
          },
          {
            name: 'Oreo',
            description: 'A cute tabby kitten sleeping soundly indoors.',
            image:'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fHww'
          },
          {
            name: 'Pumpkin',
            description: 'A grey and white cat licking its paw while looking at the camera.',
            image: 'https://images.pexels.com/photos/177804/pexels-photo-177804.jpeg?cs=srgb&dl=pexels-pixabay-177804.jpg&fm=jpg'
          },
          {
            name: 'Midnight',
            description: 'A fluffy white kitten with blue eyes wearing a tiny floral collar.',
            image: 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-1643457.jpg&fm=jpg'
          },
          {
            name: 'Snowball',
            description: 'An adorable grey kitten peeking out of a wicker basket.',
            image: 'https://images.pexels.com/photos/16075528/pexels-photo-16075528.jpeg?cs=srgb&dl=pexels-pixabay-16075528.jpg&fm=jpg'
          },
          {
            name: 'Ginger',
            description: 'A ginger and white kitten with striking eyes and fluffy fur.',
            image: 'https://images.pexels.com/photos/327881/pexels-photo-327881.jpeg?cs=srgb&dl=pexels-pixabay-327881.jpg&fm=jpg'
          },
          {
            name: 'Daisy',
            description: 'A charming kitten climbing a tree on a sunny day among green leaves.',
            image: 'https://images.pexels.com/photos/4528954/pexels-photo-4528954.jpeg?cs=srgb&dl=pexels-yuliya-kashirina-4528954.jpg&fm=jpg'
          },
          {
            name: 'Smokey',
            description: 'An adorable kitten walking through autumn grass.',
            image: 'https://images.pexels.com/photos/1813746/pexels-photo-1813746.jpeg?cs=srgb&dl=pexels-dids-1813746.jpg&fm=jpg'
          },
          {
            name: 'Charlie',
            description: 'A ginger tabby cat wearing a red bandana sitting on a white stool.',
            image: 'https://images.pexels.com/photos/5252126/pexels-photo-5252126.jpeg?cs=srgb&dl=pexels-szabina-boros-5252126.jpg&fm=jpg'
          },
          {
            name: 'Milo',
            description: 'A peaceful kitten stretching out in a sunlit room.',
            image: 'https://images.pexels.com/photos/6284024/pexels-photo-6284024.jpeg?cs=srgb&dl=pexels-nadin-sh-6284024.jpg&fm=jpg'
          },
          {
            name: 'Oliver',
            description: 'A charming kitten sniffing a daisy flower in a sunny garden.',
            image: 'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?cs=srgb&dl=pexels-pixabay-669015.jpg&fm=jpg'
          },
          {
            name: 'Chloe',
            description: 'A close-up of a yawning kitten with its eyes closed.',
            image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
          },
          {
            name: 'Sophie',
            description: 'An adorable cat lounging next to a note that says "All you need is cat".',
            image: 'https://images.pexels.com/photos/406248/pexels-photo-406248.jpeg?cs=srgb&dl=pexels-pixabay-406248.jpg&fm=jpg'
          },
          {
            name: 'Lucky',
            description: 'A cute calico kitten lying down against a yellow background.',
            image: 'https://images.pexels.com/photos/804433/pexels-photo-804433.jpeg?cs=srgb&dl=pexels-tamba-budiarsana-804433.jpg&fm=jpg'
          },
          {
            name: 'Cookie',
            description: 'A cute domestic kitten with blue eyes lying on a fluffy rug.',
            image: 'https://images.pexels.com/photos/1441596/pexels-photo-1441596.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1441596.jpg&fm=jpg'
          },
          {
            name: 'Pepper',
            description: 'A close-up shot of a cute kitten sleeping peacefully on a soft surface.',
            image: 'https://images.pexels.com/photos/2331607/pexels-photo-2331607.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2331607.jpg&fm=jpg'
          },
          {
            name: 'Coco',
            description: 'A serene close-up of a ginger cat sleeping with eyes closed.',
            image: 'https://images.pexels.com/photos/290164/pexels-photo-290164.jpeg?cs=srgb&dl=pexels-pixabay-290164.jpg&fm=jpg'
          },
          {
            name: 'Kitty',
            description: 'A playful Scottish Fold cat wearing a pink shower cap on a pink background.',
            image: 'https://images.pexels.com/photos/16528177/pexels-photo-16528177.jpeg?cs=srgb&dl=pexels-dominika-roseclay-16528177.jpg&fm=jpg'
          },
          {
            name: 'Boots',
            description: 'A tabby cat with a bread slice collar posing against a red background.',
            image: 'https://images.pexels.com/photos/16528176/pexels-photo-16528176.jpeg?cs=srgb&dl=pexels-dominika-roseclay-16528176.jpg&fm=jpg'
          },
          {
            name: 'Jasper',
            description: 'A calico cat casually resting on a chair indoors.',
            image: 'https://images.pexels.com/photos/4528751/pexels-photo-4528751.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4528751.jpg&fm=jpg'
          },
          {
            name: 'Lily',
            description: 'A curious black kitten with blue eyes peering from a windowsill.',
            image: 'https://images.pexels.com/photos/827478/pexels-photo-827478.jpeg?cs=srgb&dl=pexels-pixabay-827478.jpg&fm=jpg'
          },
          {
            name: 'Oscar',
            description: 'A gray cat playfully standing on its hind legs indoors.',
            image: 'https://images.pexels.com/photos/574266/pexels-photo-574266.jpeg?cs=srgb&dl=pexels-pixabay-574266.jpg&fm=jpg'
          },
          {
            name: 'Toby',
            description: 'A tabby cat wearing tiny sunglasses on a pink background.',
            image: 'https://images.pexels.com/photos/3961313/pexels-photo-3961313.jpeg?cs=srgb&dl=pexels-eunice-mae-cadiente-3961313.jpg&fm=jpg'
          },
          {
            name: 'Peanut',
            description: 'A close-up of a domestic cat with vibrant eyes and long whiskers.',
            image: 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?cs=srgb&dl=pexels-pixabay-320014.jpg&fm=jpg'
          },
          {
            name: 'Mochi',
            description: 'A tabby cat wearing a pink shower cap in a playful scene.',
            image: 'https://images.pexels.com/photos/16528178/pexels-photo-16528178.jpeg?cs=srgb&dl=pexels-dominika-roseclay-16528178.jpg&fm=jpg'
          },
          {
            name: 'Cinnamon',
            description: 'A Chihuahua dog and Siamese cat snuggling in their owners’ arms.',
            image: 'https://images.pexels.com/photos/7512923/pexels-photo-7512923.jpeg?cs=srgb&dl=pexels-sam-lion-7512923.jpg&fm=jpg'
          },
          {
            name: 'Marshmallow',
            description: 'A tiny tabby kitten yawning adorably with eyes closed.',
            image: 'https://images.pexels.com/photos/226379/pexels-photo-226379.jpeg?cs=srgb&dl=pexels-pixabay-226379.jpg&fm=jpg'
          },
          {
            name: 'Hazel',
            description: 'A sleepy tabby cat napping on a wooden bench outdoors.',
            image: 'https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_1280.jpg'
          },
          {
            name: 'Felix',
            description: 'A golden tabby and white kitten standing on a ledge outdoors.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg'
          },
          {
            name: 'Misty',
            description: 'Four fluffy kittens sitting together in a cozy basket.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/4_Kittens.jpg'
          },
          {
            name: 'Olive',
            description: 'Three kittens resting together on a soft blue towel.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Kittens_Resting.jpg'
          },
          {
            name: 'Jack',
            description: 'A tiny black kitten meowing nervously by someone’s feet.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Aris_the_nervous_kitten.jpg'
          },
          {
            name: 'Cleo',
            description: 'A big-eyed tabby cat peeking out from a car wheel well.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Cute_Cat.jpg'
          },
          {
            name: 'Max',
            description: 'A calico kitten sitting in a wall opening and looking back.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Baby_cat_turning.jpg'
          },
          {
            name: 'Tigger',
            description: 'An orange Persian cat peacefully sleeping on the patio.',
            image: 'https://unsplash.com/photos/9UUoGaaHtNE/download?force=true'
          },
          {
            name: 'Bandit',
            description: 'A ginger kitten sleeps curled up on the ground.',
            image: 'https://unsplash.com/photos/75715CVEJhI/download?force=true'
          },
          {
            name: 'Mango',
            description: 'A brown tabby cat sitting on white stairs with a relaxed gaze.',
            image: 'https://unsplash.com/photos/mJaD10XeD7w/download?force=true'
          },
          {
            name: 'Ziggy',
            description: 'A startled blue-eyed cat looking up attentively.',
            image: 'https://unsplash.com/photos/IFxjDdqK_0U/download?force=true'
          },
          {
            name: 'Frankie',
            description: 'A cute kitten raising a paw against a solid blue background.',
            image: 'https://unsplash.com/photos/ZCHj_2lJP00/download?force=true'
          },
          {
            name: 'Poppy',
            description: 'A black and white cat lounging on top of a bag with amber eyes.',
            image: 'https://unsplash.com/photos/p5PR8hciwL4/download?force=true'
          }
    ];

    // Populate gallery with cute cat cards
    cats.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        catCard.innerHTML = `
            <div class="cat-image-container">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            </div>
            <div class="cat-info">
                <h3>${cat.name}</h3>
                <p>${cat.description}</p>
                <button class="like-button" aria-label="Like this cat">❤️</button>
            </div>
        `;

        // Add like button functionality
        const likeButton = catCard.querySelector('.like-button');
        let isLiked = false;
        likeButton.addEventListener('click', () => {
            isLiked = !isLiked;
            likeButton.textContent = isLiked ? '💖' : '❤️';
            likeButton.classList.toggle('liked');
        });

        gallery.appendChild(catCard);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
