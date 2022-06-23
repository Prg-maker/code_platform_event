import {DiscordLogo , Lightning} from 'phosphor-react'


interface ButtonLinkProps{
  url: string;
  title: string;
  typeIcon: 'DiscordLogo' | 'Lightning';
  border?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverTitleColor?: string;

}

export function ButtonLink(props:ButtonLinkProps){
  return(
    <a className={`p-4 text-sm ${props.textColor} ${props.backgroundColor} ${props.border} flex items-center rounded font-bold uppercase gap-2 justify-center ${props.hoverColor} ${props.hoverTitleColor} transition-colors`} href={props.url}>
      {
        props.typeIcon == 'DiscordLogo'? <DiscordLogo size={24}/> : <Lightning size={24}/>
      }
      {props.title}
    </a>
  )
}