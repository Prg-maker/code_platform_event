import {CaretRight, Image, FileArrowDown,} from 'phosphor-react'
import { ButtonLink } from './ButtonLink';
import {Player, Youtube, DefaultUi} from '@vime/react'

import '@vime/core/themes/default.css'

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="KJj70dBgRPo"/>
            <DefaultUi/>
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold ">
              Aula 01 - Abertura do ignite
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed ">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>
            
            <div className='flex items-center gap-4 mt-6'>
              <img 
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src="https://github.com/prg-maker.png" 
                alt=""
              />

              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>Daniel Fernandes Silva</strong>
                <span className='text-gray-200 text-sm block'>CTO @Daniel</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-4 ">
           

            <ButtonLink
              title='Comunidade do discord'
              typeIcon='DiscordLogo'
              url=''
              backgroundColor='bg-green-500'
              hoverColor='hover:bg-green-700'
            />

            <ButtonLink
              title='Acesse o desafio'
              typeIcon='Lightning'
              url=''
              hoverColor='hover:bg-blue-500'
              hoverTitleColor='hover:text-gray-900'
              border='border border-blue-500 '
              textColor='text-blue-500'
            />      

          </div>
        </div>

        <div className='gap-8 mt-20 grid grid-cols-2 '>

        <a 
          href=""
          className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600  transition-colors'
        >
          <div className='bg-green-700 h-full p-6 flex items-center '>
            <FileArrowDown size={40}/>
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-2xl'>Material complementar</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className='h-full p-6 flex items-center'>
            <CaretRight size={24}/>
          </div>

        </a>
        
        <a 
          href=""
          className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600  transition-colors'
        >
          <div className='bg-green-700 h-full p-6 flex items-center '>
            <Image size={40}/>
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-2xl'>Wallpapers exclusivos</strong>
            <p className='text-sm text-gray-200 mt-2'>
              Baixe wallpapers exclusivos do ignite Lab e persanalize a sua máquina 
            </p>
          </div>
          <div className='h-full p-6 flex items-center'>
            <CaretRight size={24}/>
          </div>

        </a>
        


        </div>


      </div>
    </div>
  );
}
