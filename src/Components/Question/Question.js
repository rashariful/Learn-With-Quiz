import swal from 'sweetalert';
import { EyeIcon} from '@heroicons/react/24/solid'


const Question = ({qs}) => {
    const correctAnswer = qs.correctAnswer

    const handleclicked = (option)=>{
        

        if (option === correctAnswer){
           
            swal({
                title: "Good job!",
                text: "Your Answer is Correct",
                icon: "success",
                button: "Done",
            });
           
        }
        else{
            swal({
                title: "Bad Luck! Try Again.",
                text: "Your Answer is Wrong",
                icon: "error",
                button: "Done",
            });
        }
       
       
    };

    const eye = (qs) => {
        const correctAnswer = qs.correctAnswer
        swal({
          
            icon: "success",
            title: "Correct Answer is",
            text: correctAnswer,

        })
        console.log(correctAnswer);
    };
   


    const { question } = qs
    return (
        <div>

            <p className='text-center'>quiz: {}</p>
            <h3 className='font-semibold text-center'>{question.slice(3, -4)}</h3>
            <div className='text-center py-3'>
                <button onClick={()=> eye(qs)}> <EyeIcon className="h-6 w-6 text-blue-500 text-center" />
                
                </button>
                
            </div>
            
            <div className='grid mx-auto' >
                

            {
                qs.options.map(op => 
                    <button onClick={() => handleclicked(op)} className='text-center my-3 border border-indigo-500 py-4 w-96 mx-auto rounded-md shadow-md' 
                
                
                op={op}>{op} 

            
                 </button>)
            }
            
            </div>
            
        </div>
        
    );
};

export default Question;