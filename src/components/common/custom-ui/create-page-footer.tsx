import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const CreatePageFooter = ({isPending , label="CREATE"}: {isPending?: boolean,label?: string}) => {
    const router = useRouter()
  return (
    <div className="flex items-center gap-x-5 py-4 justify-between px-3 bg-background border-t border-border uppercase">
    <Button
        type="button"
        onClick={() => router.back()}
    >
        GO BACK
    </Button>
    <Button className="min-w-[8rem] uppercase" type="submit" isLoading={isPending} disabled={isPending}>
        CREATE {label}
    </Button>
</div>
  )
}

export default CreatePageFooter