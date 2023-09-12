import { Button } from "./components/ui/button";
import {FileVideo, Github} from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";

export function App() {
    return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido no NLW da RocketSeat </span>
          <Separator orientation="vertical" className="h-6"/>
          <Button variant="outline">
            <Github className="w-4 h-4 nr-2 "/>
            GitHub</Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
            className="resize-none p-4 leading-relaxed"
            placeholder="Inclua o prompt para a IA..."
            />

            <Textarea
            className="resize-none p-4 leading-relaxed"
            placeholder="Resultado gerado pela IA..."
            readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode usar a variável <code className="text-violet-400">{'{transcription}'}</code> no sei prompt para adicionar o conteúdo de transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-88 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-slate-700/40"
            >
              <FileVideo className="w-4 h-4"/>
              Selecione um vídeo
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only"/>
          </form>
        </aside>
      </main>
    </div>
  )
}

