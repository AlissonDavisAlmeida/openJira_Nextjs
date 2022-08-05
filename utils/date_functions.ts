import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export const getFormatDistanceToNow = (date: Date) => {

    const newDate = new Date(date)
    return formatDistanceToNow(newDate, { addSuffix: true, includeSeconds: true, locale: ptBR })

}