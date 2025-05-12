
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Заголовок должен содержать не менее 5 символов",
  }).max(100, {
    message: "Заголовок должен содержать не более 100 символов",
  }),
  category: z.string({
    required_error: "Пожалуйста, выберите категорию",
  }),
  content: z.string().min(20, {
    message: "Содержание должно быть не менее 20 символов",
  }),
  source: z.string().optional(),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
});

const categories = [
  { value: "politics", label: "Политика" },
  { value: "business", label: "Бизнес" },
  { value: "technology", label: "Технологии" },
  { value: "science", label: "Наука" },
  { value: "health", label: "Здоровье" },
  { value: "sports", label: "Спорт" },
  { value: "entertainment", label: "Развлечения" },
  { value: "culture", label: "Культура" },
  { value: "other", label: "Другое" },
];

const SubmitNewsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      source: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Новость отправлена на модерацию",
      description: "Спасибо за вашу новость! Мы рассмотрим её в ближайшее время.",
    });
    
    console.log(values);
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Icon name="PenLine" className="h-5 w-5 text-primary" />
          Предложить новость
        </CardTitle>
        <CardDescription>
          Станьте частью нашего сообщества и поделитесь важными событиями
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите заголовок новости" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Содержание</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Опишите новость подробно"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Источник (если есть)</FormLabel>
                  <FormControl>
                    <Input placeholder="Укажите источник информации" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ссылка на оригинальную статью или иной источник
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваш email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Мы свяжемся с вами, если новость будет опубликована
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <CardFooter className="px-0">
              <Button type="submit" className="w-full">
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Отправить новость
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SubmitNewsForm;
