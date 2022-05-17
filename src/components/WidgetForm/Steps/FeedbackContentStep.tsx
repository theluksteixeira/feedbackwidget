
import { ArrowLeft, Camera } from "phosphor-react";
import { feedbackTypes, FeedbackType } from "../index";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
    
    const [screenShot, setScreenShot] = useState<string |null>(null);
    const [comment, setComment] = useState('');
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();

        
    }

    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h4" />
                </button>

                <span className="text-xl leading-6">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                    <textarea
                        onChange={event => setComment(event.target.value)}
                        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                        placeholder="Conte com detalhes o que está acontecendo..."
                    />
                    <footer className="flex gap-2 mt-2">
                        <ScreenshotButton screenshot={screenShot} onScreenshotTook={setScreenShot}></ScreenshotButton>

                        <button type="submit" disabled={comment.length === 0} className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">Enviar feedback</button>
                    </footer>
                </form>
            </div>
        </>
    )
}