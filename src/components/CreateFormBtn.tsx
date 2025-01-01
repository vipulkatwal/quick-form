"use client";

import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

const formSchema = z.object({
	name: z.string().min(4),
	description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>;

function CreateFormBtn() {
	const form = useForm<formSchemaType>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: formSchemaType) {
		console.log(values);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Create new form</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create form</DialogTitle>
					<DialogDescription>
						Create a new form to start collecting responses
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export default CreateFormBtn;
