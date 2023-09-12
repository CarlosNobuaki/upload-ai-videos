import { Button } from "./components/ui/button";
import {FileVideo, Github, Upload, Wand2} from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

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

      <main className="flex p-8 flex-1 gap-4">
        <div className="flex flex-col gap-6 flex-1">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
            className="resize-none p-4 flex leading-relaxed"
            placeholder="Inclua o prompt para a IA..."
            />

            <Textarea
            className="resize-none p-4 flex leading-relaxed"
            placeholder="Resultado gerado pela IA..."
            readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode usar a variável <code className="text-violet-400">{'{transcription}'}</code> no sei prompt para adicionar o conteúdo de transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-64 space-y-8">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col flex-1 gap-2 items-center justify-center text-muted-foreground hover:bg-slate-700/40"
            >
              <FileVideo className="w-8 h-8"/>
              Selecione um vídeo
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only"/>
            <Separator/>
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea 
              id="transcription_prompt" 
              className="h-20 leading-relaxed resize-none"
              placeholder="Inclua palavras-chave mensionadas no vídeo separadas por vírgula (,)"
              />             
            </div>
            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator/>

          <form className="space-y-6">
          <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..."/>                  
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do YouTube</SelectItem>
                  <SelectItem value="description">Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>              
            </div>
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue>

                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opçãp em breve
                </span>
            </div>
            <Separator/>
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possívels erros.
                </span>
            </div>
            <Separator/>
            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

