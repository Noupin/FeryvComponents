//Third Party Imports
import React, { useState } from 'react';

//First Party Imports
import { Image } from '../Image/Image';
import { Video } from '../Video/Video';
import { dropFiles, allowDrop } from '../../Helpers/dragAndDrop';
import { validMediaFileExtensions, videoTypes } from '../../constants';
import './Media.scss';

interface IMedia{
  mediaSrc?: File
  srcString?: string
  mediaType?: string
  droppable?: boolean
  errorCallback?: (err: string) => void
}

interface IMediaImage extends IMedia, React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{}

interface IMediaVideo extends IMedia, React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>{}


export const Media = (props: IMediaImage | IMediaVideo) => {
  const {mediaSrc, srcString, mediaType, droppable, className, errorCallback=(err) => console.error(err), ...mediaProps} = props;
  const cssClasses = className?.toString() + "";

  let imageProps = mediaProps as IMediaImage;
  let videoProps = mediaProps as IMediaVideo;

  let element: JSX.Element
  var mediaSrcString = srcString;
  const [mediaSrcState, setMediaSrcState] = useState(mediaSrc);

  if(!mediaSrcString){
    mediaSrcString = mediaSrcState ? URL.createObjectURL(mediaSrcState) : "";
  }


  if ((mediaSrcState && videoTypes.indexOf(mediaSrcState.name.split('.').pop()!) !== -1)
      || (srcString && srcString.indexOf('video') !== -1)){
    if(droppable){
      element = <Video onDragOver={(event) => allowDrop(event)}
                       onDrop={(event) => setMediaSrcState(dropFiles(event, errorCallback, validMediaFileExtensions)[0])}
                       videoSrc={mediaSrcString} videoType={mediaType!}
                       className={cssClasses} {...videoProps}/>;
    }
    else{
      element = <Video videoSrc={mediaSrcString} videoType={mediaType!}
                       className={cssClasses} {...videoProps}/>;
    }
  }
  else{
    if(droppable){
      element = <Image onDragOver={(event) => allowDrop(event)}
                       onDrop={(event) => setMediaSrcState(dropFiles(event, errorCallback, validMediaFileExtensions)[0])}
                       imageSrc={mediaSrcString} className={cssClasses} {...imageProps}/>
    }
    else{
      element = <Image imageSrc={mediaSrcString} className={cssClasses} {...imageProps}/>
    }
  }

  return (
    <>
      {element}
    </>
  );
}
