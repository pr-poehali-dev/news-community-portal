
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import TextField from "@/components/ui/form-fields/TextField";
import SelectField from "@/components/ui/form-fields/SelectField";
import TextareaField from "@/components/ui/form-fields/TextareaField";

// Схема валидации формы
const newsSubmissionSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Заголовок должен содержать не менее 5 символов",
    })
    .max(100, {
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

// Доступные категории новостей
const newsCategories = [
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

// Тип данных формы
type NewsSubmissionFormValues = z.infer<typeof newsSubmissionSchema>;

interface NewsSubmissionFormProps {
  onSuccess?: (data: NewsSubmissionFormValues) => void;
}

const NewsSubmissionForm = ({ onSuccess }: NewsSubmissionFormProps) => {
  // Инициализируем форму с помощью react-hook-form
  const methods = useForm<NewsSubmissionFormValues>({
    resolver: zodResolver(newsSubmissionSchema),
    defaultValues: {
      title: "",
      content: "",
      source: "",
      email: "",
    },
  });

  // Обработчик отправки формы
  const handleSubmit = (values: NewsSubmissionFormValues) => {
    // Показываем уведомление об успешной отправке
    toast({
      title: "Новость отправлена на модерацию",
      description:
        "Спасибо за вашу новость! Мы рассмотрим её в ближайшее время.",
    });

    // Логируем данные (в реальном приложении здесь будет API-запрос)
    console.log(values);
    
    // Вызываем callback если он передан
    if (onSuccess) {
      onSuccess(values);
    }
    
    // Сбрасываем форму
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-4">
        <TextField
          name="title"
          label="Заголовок"
          placeholder="Введите заголовок новости"
        />

        <SelectField
          name="category"
          label="Категория"
          options={newsCategories}
          placeholder="Выберите категорию"
        />

        <TextareaField
          name="content"
          label="Содержание"
          placeholder="Опишите новость подробно"
          minHeight="100px"
        />

        <TextField
          name="source"
          label="Источник (если есть)"
          placeholder="Укажите источник информации"
          description="Ссылка на оригинальную статью или иной источник"
        />

        <TextField
          name="email"
          label="Ваш email"
          placeholder="email@example.com"
          description="Мы свяжемся с вами, если новость будет опубликована"
        />

        <CardFooter className="px-0">
          <Button type="submit" className="w-full">
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Отправить новость
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  );
};

export default NewsSubmissionForm;
