import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const AuthorBlock = ({ name, image, date, url }) => (
    <div className='flex flex-row gap-3 mt-5'>
        <GatsbyImage image={image.gatsbyImage}
            class="object-contain h-full w-12 rounded-full"></GatsbyImage>
        <div class="flex flex-col gap-0">
            <h2 class="font-bold">{name}</h2>
            {url && <a href={date} class="text-slate-700 text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">Source Code</a>}
            {!url && <p class="text-slate-700 text-sm">{date}</p>}
        </div>
    </div>
)

export default AuthorBlock