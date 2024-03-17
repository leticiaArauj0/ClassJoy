import { Camera } from "phosphor-react";
import { ContainerPhoto } from "./ContainerPhoto";

interface PhotoProps {
  border?: string
  imgUrl: string
}

export function Photo({ imgUrl, border }: PhotoProps) {
    return(
        <ContainerPhoto border={border}>
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