import { Description } from "../Description"
import { ContainerCardQuestion } from "./ContainerCardQuestion"

interface QuestionProps {
    title: string
    question: string
}

export function Question({ title, question }: QuestionProps) {
    return(
        <ContainerCardQuestion>
            <h3>{ title }</h3>
            <span>{ question }</span>
            <div className="question">
                <div>
                    <input type="radio" name="question" />
                    <span> 1</span>
                </div>
                <div>
                    <input type="radio" name="question" />
                    <span> 2</span>
                </div>
                <div>
                    <input type="radio" name="question" />
                    <span> 3</span>
                </div>

                <div>
                    <input type="radio" name="question" />
                    <span> 4</span>
                </div>
                <div>
                    <input type="radio" name="question" />
                    <span> 5</span>
                </div>
            </div>
            <textarea name="" id="" placeholder="Observações"></textarea>
            <Description number={1} description="descrição" color="#603FA7" />
            <Description number={2} description="descrição" color="#FBB925" />
            <Description number={3} description="descrição" color="#603FA7" />
            <Description number={4} description="descrição" color="#FBB925" />
            <Description number={5} description="descrição" color="#603FA7" />
        </ContainerCardQuestion>
    )
}
