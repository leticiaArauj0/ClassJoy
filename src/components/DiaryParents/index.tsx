import { ContainerDiaryParents } from "./styles/ContainerDiaryParents"
import { ContainerQuestion } from "./styles/ContainerQuestion"
import { ContainerStudentInfo } from "./styles/ContainerStudentInfo"
import { format } from 'date-fns';

interface DiaryParentsProps {
    name?: string,

    entryTime?: string,
    departureTime?: string,

    feeding?: string,
    ateAlone?: string,
    obsFeeding?: string,

    sleep?: string,
    startSleep?: string,
    endSleep?: string,
    sleepObs?: string,

    bathroom?: string,
    bathroomAmount?: number,
    obsBathroom?: string

    reminder?: string,
    notice?: string,
}

export function DiaryParents({ 
    name, 
    entryTime, 
    departureTime,
    feeding,
    ateAlone,
    obsFeeding,
    sleep, 
    startSleep, 
    endSleep,
    sleepObs,
    bathroom, 
    bathroomAmount,
    obsBathroom, 
    notice, 
    reminder }: DiaryParentsProps) {

    let date = new Date().toISOString().split('T')[0];
    date = format(new Date(), 'dd/MM/yyyy'); 

    let slept = false
    if(sleep === 'dormiu') slept = true

    return(
        <ContainerDiaryParents height="calc(100vh - 12.5rem)">
            <h1 style={{textAlign: "center"}}>Agenda</h1>
            <ContainerStudentInfo>
                <img src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" alt="" />
                <div className="info">
                    <strong>Nome: {name}</strong>
                    <strong>Data: {date}</strong>
                    <div className="hour">
                        <strong>Entrada: {entryTime}</strong>
                        <strong>Saída: {departureTime}</strong>
                    </div>
                </div>
            </ContainerStudentInfo>
            <div className="line"></div>
            <ContainerQuestion>
                <h2>Alimentação</h2>
                <div className="feeding">
                    <div>
                        <input type="radio" name="feeding" checked={feeding === 'comeu'} />
                        <span> Comeu</span>
                    </div>
                    <div>
                        <input type="radio" name="feeding" checked={feeding === 'comeu pouco'} />
                        <span> Comeu Pouco</span>
                    </div>
                    <div>
                        <input type="radio" name="feeding" checked={feeding === 'não comeu'} />
                        <span> Não Comeu</span>
                    </div>
                </div>
                <div className="ateAlone">
                    <div>
                        <input type="radio" name="ateAlone" checked={ateAlone === 'sozinho'} />
                        <span> Sozinho</span>
                    </div>
                    <div>
                        <input type="radio" name="ateAlone" checked={ateAlone === 'acompanhado'} />
                        <span> Acompanhado</span>
                    </div>
                </div>
                {
                    obsFeeding ? <div className="notes">{obsFeeding}</div> : null
                }
            </ContainerQuestion>
            <ContainerQuestion>
                <h2>Banheiro</h2>
                <div className="bathroom">
                    <div>
                        <input type="radio" name="bathroom" checked={bathroom === 'sim'} />
                        <span> Sim</span>
                    </div>
                    <div>
                        <input type="radio" name="bathroom" checked={bathroom === 'não'} />
                        <span> Não</span>
                    </div>
                    <div className="bathroomAmount">
                        <strong>Frequência: </strong>
                        <div>{bathroomAmount}</div>        
                    </div>
                </div>
                {
                    obsBathroom ? <div className="notes">{obsBathroom}</div> : null
                }
            </ContainerQuestion>
            <ContainerQuestion>
                <h2>Soneca</h2>
                <div className="sleep">
                    <div>
                        <input type="radio" name="sleep" checked={sleep === 'dormiu'} />
                        <span> Dormiu</span>
                    </div>
                    <div>
                        <input type="radio" name="sleep" checked={sleep === 'não dormiu'} />
                        <span> Não dormiu</span>
                    </div>
                    {
                        slept ? 
                        <div className="time">
                            <div>
                                <strong>Das: </strong>
                                <div>{startSleep}</div>
                            </div>
                            <div>
                                <strong>às: </strong>
                                <div>{endSleep}</div>
                            </div>
                        </div> 
                        :
                        null
                    }
                    
                </div>
                {
                    sleepObs ? <div className="notes">{sleepObs}</div> : null
                }
                <h2>Trazer para a próxima aula</h2>
                <div className="notes">{reminder}</div>
                <h2>Aviso</h2>
                <div className="notes">{notice}</div>
            </ContainerQuestion>       
        </ContainerDiaryParents>
    )
}
