import { useForm } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { Photo } from "../../../../components/Photo";
import { ContainerQuestion } from "../../styles/ContainerQuestion";
import { ContainerTimeDate } from "../../styles/ContainerTimeDate";
import { InputObs } from "../../styles/InputObs";
import { ContainerInfoStudents } from "./ContainerInfoStudents";
import { DiaryContext } from "../../../../contexts/diary/DiaryContext";
import { useContext } from "react";

interface CardStudentDiaryProps {
    id?: number
    name?: string
    age?: number
}

interface CreateDiaryProps {
    date: Date;
    entryTime: string;
    departureTime: string;
  
    feeding: string;
    ateAlone: string;
    obsFeeding?: string;
  
    sleep: string;
    startSleep?: string;
    endSleep?: string;
    obsSleep?: string;
  
    bathroom: string;
    bathroomAmount: number;
    obsBathroom?: string;
  
    reminder?: string;
    notice?: string;
  
    studentId: number;
}

export function CardStudentDiary({ id, name, age }: CardStudentDiaryProps) {
    const { createDiary } = useContext(DiaryContext)
    const { register, handleSubmit, reset } = useForm<CreateDiaryProps>()

    async function handleCreateDiary(data: CreateDiaryProps) {
        try {
            if (id) {
                await createDiary({ 
                    studentId: id,
                    ateAlone: data.ateAlone,
                    bathroom: data.bathroom,
                    bathroomAmount: data.bathroomAmount,
                    date: data.date,
                    departureTime: data.departureTime,
                    entryTime: data.entryTime,
                    feeding: data.feeding,
                    sleep: data.sleep,
                    startSleep: data.startSleep,
                    endSleep: data.endSleep,
                    notice: data.notice,
                    obsBathroom: data.obsBathroom,
                    obsFeeding: data.obsFeeding,
                    obsSleep: data.obsSleep,
                    reminder: data.reminder  
                })
            }
        } catch (error) {
            console.error("Erro ao criar agenda", error);
        }

        reset()
    }
    
    return(
        <ContainerInfoStudents height="calc(100vh - 14rem)">
            <div className="background"></div>
            <Photo height="7rem" camera="flex" imgUrl="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" border='5px solid #351181' />
            <h2>{name}</h2>
            <div className="container-age-code">
                <span>
                    <strong>Idade: </strong>
                    {age} anos
                </span>
                <span>
                    <strong>Código: </strong>
                    {id}
                </span>
            </div>
            <form onSubmit={handleSubmit(handleCreateDiary)}>
                <ContainerTimeDate>
                    <div className="time">
                        <div>
                            <strong>Entrada: </strong>
                            <input type="time" {...register('entryTime')} />
                        </div>
                        <div>
                            <strong>Saída: </strong>
                            <input type="time" {...register('departureTime')} />
                        </div>
                    </div>
                    <div>
                        <strong>Data: </strong>
                        <input type="date" defaultValue={new Date().toISOString().split('T')[0]} {...register('date')} />
                    </div>
                    <div className="line"></div>
                </ContainerTimeDate>
                <ContainerQuestion>
                    <h2 className="title">Alimentação</h2>
                    <div className="feeding">
                        <div>
                            <input type="radio" value="comeu" {...register('feeding')} />
                            <span> Comeu</span>
                        </div>
                        <div>
                            <input type="radio" value="comeu pouco" {...register('feeding')} />
                            <span> Comeu Pouco</span>
                        </div>
                        <div>
                            <input type="radio" value="não comeu" {...register('feeding')} />
                            <span> Não Comeu</span>
                        </div>
                    </div>
                    <div className="ateAlone">
                        <div>
                            <input type="radio" value="sozinho" {...register('ateAlone')} />
                            <span> Sozinho</span>
                        </div>
                        <div>
                            <input type="radio" value="acompanhado" {...register('ateAlone')} />
                            <span> Acompanhado</span>
                        </div>
                    </div>
                    <InputObs placeholder="Observações" {...register('obsFeeding')} />
                </ContainerQuestion>
                <ContainerQuestion>
                    <h2 className="title">Banheiro</h2>
                    <div className="bathroom">
                        <div>
                            <input type="radio" value="sim" {...register('bathroom')} />
                            <span> Sim</span>
                        </div>
                        <div>
                            <input type="radio" value="não" {...register('bathroom')} />
                            <span> Não</span>
                        </div>
                        <div>
                            <span>Frequência: </span>
                            <input className="qtd" type="number" min={0} {...register('bathroomAmount')} />           
                        </div>
                    </div>
                    <InputObs placeholder="Observações" {...register('obsBathroom')} />
                </ContainerQuestion>
                <ContainerQuestion>
                    <h2 className="title">Soneca</h2>
                    <div className="sleep">
                        <div>
                            <input type="radio" value="dormiu" {...register('sleep')} />
                            <span> Dormiu</span>
                        </div>
                        <div>
                            <input type="radio" value="não dormiu" {...register('sleep')} />
                            <span> Não dormiu</span>
                        </div>
                        <div className="time">
                            <div>
                                <strong>Das: </strong>
                                <input type="time" {...register('startSleep')} />
                            </div>
                            <div>
                                <strong>às: </strong>
                                <input type="time" {...register('endSleep')} />
                            </div>
                        </div>
                    </div>
                    <InputObs placeholder="Observações" {...register('obsSleep')} />
                    <h2 className="title">Trazer para a próxima aula</h2>
                    <InputObs placeholder="Observações" {...register('reminder')} />
                    <h2 className="title">Aviso</h2>
                    <InputObs placeholder="Observações" {...register('notice')} />
                </ContainerQuestion>       
                <div className="container-button">
                    <Button color="#966AF1" height="2.1rem" text="Salvar" width="5.5rem" type="submit"  />
                    <Button color="#00B8F0" height="2.1rem" text="Limpar" width="5.5rem" type="reset"  />
                </div>  
            </form>
        </ContainerInfoStudents>
    )
}
