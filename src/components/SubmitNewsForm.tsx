import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import NewsSubmissionForm from "@/components/forms/NewsSubmissionForm";

/**
 * SubmitNewsForm - компонент, который позволяет пользователям предлагать свои новости
 *
 * Компонент включает карточку с заголовком, описанием и формой для отправки новости.
 * Логика валидации и обработки формы вынесена в отдельный компонент NewsSubmissionForm.
 */
const SubmitNewsForm = () => {
  return (
    <Card className="border-primary/20 shadow-md">
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
        <NewsSubmissionForm />
      </CardContent>
    </Card>
  );
};

export default SubmitNewsForm;
