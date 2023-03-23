import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client, Transport } from '@nestjs/microservices';
import { ClientKafka } from '@nestjs/microservices/client';

@Controller('users')
export class AppController {}
