import { Camera } from "phosphor-react";
import { ContainerPhoto } from "./ContainerPhoto";

interface PhotoProps {
  height: string
  border?: string
  camera?: string
  imgUrl: string
}

export function Photo({ imgUrl, border, height, camera }: PhotoProps) {
    return(
        <ContainerPhoto camera={camera} height={height} border={border}>
          <img
            src={imgUrl}
            alt=""
          />
          <div className="camera">
            <Camera size={16} weight="fill" />
          </div>
        </ContainerPhoto>
    )
}
