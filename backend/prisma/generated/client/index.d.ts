
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model ayudante
 * 
 */
export type ayudante = $Result.DefaultSelection<Prisma.$ayudantePayload>
/**
 * Model especial
 * 
 */
export type especial = $Result.DefaultSelection<Prisma.$especialPayload>
/**
 * Model prestamo
 * 
 */
export type prestamo = $Result.DefaultSelection<Prisma.$prestamoPayload>
/**
 * Model regular
 * 
 */
export type regular = $Result.DefaultSelection<Prisma.$regularPayload>
/**
 * Model sanciones
 * 
 */
export type sanciones = $Result.DefaultSelection<Prisma.$sancionesPayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model estudiante
 * 
 */
export type estudiante = $Result.DefaultSelection<Prisma.$estudiantePayload>
/**
 * Model recurso
 * 
 */
export type recurso = $Result.DefaultSelection<Prisma.$recursoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.ayudante`: Exposes CRUD operations for the **ayudante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayudantes
    * const ayudantes = await prisma.ayudante.findMany()
    * ```
    */
  get ayudante(): Prisma.ayudanteDelegate<ExtArgs>;

  /**
   * `prisma.especial`: Exposes CRUD operations for the **especial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especials
    * const especials = await prisma.especial.findMany()
    * ```
    */
  get especial(): Prisma.especialDelegate<ExtArgs>;

  /**
   * `prisma.prestamo`: Exposes CRUD operations for the **prestamo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamo.findMany()
    * ```
    */
  get prestamo(): Prisma.prestamoDelegate<ExtArgs>;

  /**
   * `prisma.regular`: Exposes CRUD operations for the **regular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regulars
    * const regulars = await prisma.regular.findMany()
    * ```
    */
  get regular(): Prisma.regularDelegate<ExtArgs>;

  /**
   * `prisma.sanciones`: Exposes CRUD operations for the **sanciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sanciones
    * const sanciones = await prisma.sanciones.findMany()
    * ```
    */
  get sanciones(): Prisma.sancionesDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.estudianteDelegate<ExtArgs>;

  /**
   * `prisma.recurso`: Exposes CRUD operations for the **recurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recursos
    * const recursos = await prisma.recurso.findMany()
    * ```
    */
  get recurso(): Prisma.recursoDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    ayudante: 'ayudante',
    especial: 'especial',
    prestamo: 'prestamo',
    regular: 'regular',
    sanciones: 'sanciones',
    categoria: 'categoria',
    estudiante: 'estudiante',
    recurso: 'recurso',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "ayudante" | "especial" | "prestamo" | "regular" | "sanciones" | "categoria" | "estudiante" | "recurso" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      ayudante: {
        payload: Prisma.$ayudantePayload<ExtArgs>
        fields: Prisma.ayudanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ayudanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ayudanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          findFirst: {
            args: Prisma.ayudanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ayudanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          findMany: {
            args: Prisma.ayudanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>[]
          }
          create: {
            args: Prisma.ayudanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          createMany: {
            args: Prisma.ayudanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ayudanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          update: {
            args: Prisma.ayudanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          deleteMany: {
            args: Prisma.ayudanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ayudanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ayudanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ayudantePayload>
          }
          aggregate: {
            args: Prisma.AyudanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyudante>
          }
          groupBy: {
            args: Prisma.ayudanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyudanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ayudanteCountArgs<ExtArgs>
            result: $Utils.Optional<AyudanteCountAggregateOutputType> | number
          }
        }
      }
      especial: {
        payload: Prisma.$especialPayload<ExtArgs>
        fields: Prisma.especialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.especialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.especialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          findFirst: {
            args: Prisma.especialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.especialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          findMany: {
            args: Prisma.especialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>[]
          }
          create: {
            args: Prisma.especialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          createMany: {
            args: Prisma.especialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.especialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          update: {
            args: Prisma.especialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          deleteMany: {
            args: Prisma.especialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.especialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.especialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialPayload>
          }
          aggregate: {
            args: Prisma.EspecialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecial>
          }
          groupBy: {
            args: Prisma.especialGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialGroupByOutputType>[]
          }
          count: {
            args: Prisma.especialCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialCountAggregateOutputType> | number
          }
        }
      }
      prestamo: {
        payload: Prisma.$prestamoPayload<ExtArgs>
        fields: Prisma.prestamoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestamoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestamoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          findFirst: {
            args: Prisma.prestamoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestamoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          findMany: {
            args: Prisma.prestamoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>[]
          }
          create: {
            args: Prisma.prestamoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          createMany: {
            args: Prisma.prestamoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.prestamoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          update: {
            args: Prisma.prestamoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          deleteMany: {
            args: Prisma.prestamoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestamoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.prestamoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          aggregate: {
            args: Prisma.PrestamoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamo>
          }
          groupBy: {
            args: Prisma.prestamoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamoGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestamoCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamoCountAggregateOutputType> | number
          }
        }
      }
      regular: {
        payload: Prisma.$regularPayload<ExtArgs>
        fields: Prisma.regularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          findFirst: {
            args: Prisma.regularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          findMany: {
            args: Prisma.regularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>[]
          }
          create: {
            args: Prisma.regularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          createMany: {
            args: Prisma.regularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.regularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          update: {
            args: Prisma.regularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          deleteMany: {
            args: Prisma.regularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.regularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regularPayload>
          }
          aggregate: {
            args: Prisma.RegularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegular>
          }
          groupBy: {
            args: Prisma.regularGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegularGroupByOutputType>[]
          }
          count: {
            args: Prisma.regularCountArgs<ExtArgs>
            result: $Utils.Optional<RegularCountAggregateOutputType> | number
          }
        }
      }
      sanciones: {
        payload: Prisma.$sancionesPayload<ExtArgs>
        fields: Prisma.sancionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sancionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sancionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          findFirst: {
            args: Prisma.sancionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sancionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          findMany: {
            args: Prisma.sancionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>[]
          }
          create: {
            args: Prisma.sancionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          createMany: {
            args: Prisma.sancionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sancionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          update: {
            args: Prisma.sancionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          deleteMany: {
            args: Prisma.sancionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sancionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sancionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          aggregate: {
            args: Prisma.SancionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanciones>
          }
          groupBy: {
            args: Prisma.sancionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SancionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sancionesCountArgs<ExtArgs>
            result: $Utils.Optional<SancionesCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      estudiante: {
        payload: Prisma.$estudiantePayload<ExtArgs>
        fields: Prisma.estudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          findFirst: {
            args: Prisma.estudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          findMany: {
            args: Prisma.estudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>[]
          }
          create: {
            args: Prisma.estudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          createMany: {
            args: Prisma.estudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          update: {
            args: Prisma.estudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          deleteMany: {
            args: Prisma.estudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.estudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.estudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      recurso: {
        payload: Prisma.$recursoPayload<ExtArgs>
        fields: Prisma.recursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          findFirst: {
            args: Prisma.recursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          findMany: {
            args: Prisma.recursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>[]
          }
          create: {
            args: Prisma.recursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          createMany: {
            args: Prisma.recursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          update: {
            args: Prisma.recursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          deleteMany: {
            args: Prisma.recursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          aggregate: {
            args: Prisma.RecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurso>
          }
          groupBy: {
            args: Prisma.recursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.recursoCountArgs<ExtArgs>
            result: $Utils.Optional<RecursoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    especial: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especial?: boolean | AdminCountOutputTypeCountEspecialArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEspecialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: especialWhereInput
  }


  /**
   * Count Type AyudanteCountOutputType
   */

  export type AyudanteCountOutputType = {
    regular: number
  }

  export type AyudanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regular?: boolean | AyudanteCountOutputTypeCountRegularArgs
  }

  // Custom InputTypes
  /**
   * AyudanteCountOutputType without action
   */
  export type AyudanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AyudanteCountOutputType
     */
    select?: AyudanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AyudanteCountOutputType without action
   */
  export type AyudanteCountOutputTypeCountRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regularWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    recurso: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurso?: boolean | CategoriaCountOutputTypeCountRecursoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recursoWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    regular: number
    sanciones: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regular?: boolean | EstudianteCountOutputTypeCountRegularArgs
    sanciones?: boolean | EstudianteCountOutputTypeCountSancionesArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountRegularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regularWhereInput
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountSancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sancionesWhereInput
  }


  /**
   * Count Type RecursoCountOutputType
   */

  export type RecursoCountOutputType = {
    prestamo: number
  }

  export type RecursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | RecursoCountOutputTypeCountPrestamoArgs
  }

  // Custom InputTypes
  /**
   * RecursoCountOutputType without action
   */
  export type RecursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecursoCountOutputType
     */
    select?: RecursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecursoCountOutputType without action
   */
  export type RecursoCountOutputTypeCountPrestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    sanciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanciones?: boolean | UsuarioCountOutputTypeCountSancionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sancionesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdminSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdminMinAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdminCountAggregateOutputType = {
    id_usuario: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id_usuario?: true
  }

  export type AdminSumAggregateInputType = {
    id_usuario?: true
  }

  export type AdminMinAggregateInputType = {
    id_usuario?: true
  }

  export type AdminMaxAggregateInputType = {
    id_usuario?: true
  }

  export type AdminCountAggregateInputType = {
    id_usuario?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id_usuario: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    Usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    especial?: boolean | admin$especialArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type adminSelectScalar = {
    id_usuario?: boolean
  }

  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    especial?: boolean | admin$especialArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      Usuario: Prisma.$usuarioPayload<ExtArgs>
      especial: Prisma.$especialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const adminWithId_usuarioOnly = await prisma.admin.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    especial<T extends admin$especialArgs<ExtArgs> = {}>(args?: Subset<T, admin$especialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id_usuario: FieldRef<"admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin.especial
   */
  export type admin$especialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    where?: especialWhereInput
    orderBy?: especialOrderByWithRelationInput | especialOrderByWithRelationInput[]
    cursor?: especialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecialScalarFieldEnum | EspecialScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model ayudante
   */

  export type AggregateAyudante = {
    _count: AyudanteCountAggregateOutputType | null
    _avg: AyudanteAvgAggregateOutputType | null
    _sum: AyudanteSumAggregateOutputType | null
    _min: AyudanteMinAggregateOutputType | null
    _max: AyudanteMaxAggregateOutputType | null
  }

  export type AyudanteAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type AyudanteSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type AyudanteMinAggregateOutputType = {
    id_usuario: number | null
  }

  export type AyudanteMaxAggregateOutputType = {
    id_usuario: number | null
  }

  export type AyudanteCountAggregateOutputType = {
    id_usuario: number
    _all: number
  }


  export type AyudanteAvgAggregateInputType = {
    id_usuario?: true
  }

  export type AyudanteSumAggregateInputType = {
    id_usuario?: true
  }

  export type AyudanteMinAggregateInputType = {
    id_usuario?: true
  }

  export type AyudanteMaxAggregateInputType = {
    id_usuario?: true
  }

  export type AyudanteCountAggregateInputType = {
    id_usuario?: true
    _all?: true
  }

  export type AyudanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ayudante to aggregate.
     */
    where?: ayudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ayudantes to fetch.
     */
    orderBy?: ayudanteOrderByWithRelationInput | ayudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ayudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ayudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ayudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ayudantes
    **/
    _count?: true | AyudanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyudanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyudanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyudanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyudanteMaxAggregateInputType
  }

  export type GetAyudanteAggregateType<T extends AyudanteAggregateArgs> = {
        [P in keyof T & keyof AggregateAyudante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyudante[P]>
      : GetScalarType<T[P], AggregateAyudante[P]>
  }




  export type ayudanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ayudanteWhereInput
    orderBy?: ayudanteOrderByWithAggregationInput | ayudanteOrderByWithAggregationInput[]
    by: AyudanteScalarFieldEnum[] | AyudanteScalarFieldEnum
    having?: ayudanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyudanteCountAggregateInputType | true
    _avg?: AyudanteAvgAggregateInputType
    _sum?: AyudanteSumAggregateInputType
    _min?: AyudanteMinAggregateInputType
    _max?: AyudanteMaxAggregateInputType
  }

  export type AyudanteGroupByOutputType = {
    id_usuario: number
    _count: AyudanteCountAggregateOutputType | null
    _avg: AyudanteAvgAggregateOutputType | null
    _sum: AyudanteSumAggregateOutputType | null
    _min: AyudanteMinAggregateOutputType | null
    _max: AyudanteMaxAggregateOutputType | null
  }

  type GetAyudanteGroupByPayload<T extends ayudanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyudanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyudanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyudanteGroupByOutputType[P]>
            : GetScalarType<T[P], AyudanteGroupByOutputType[P]>
        }
      >
    >


  export type ayudanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    Usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    regular?: boolean | ayudante$regularArgs<ExtArgs>
    _count?: boolean | AyudanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayudante"]>


  export type ayudanteSelectScalar = {
    id_usuario?: boolean
  }

  export type ayudanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    regular?: boolean | ayudante$regularArgs<ExtArgs>
    _count?: boolean | AyudanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ayudantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ayudante"
    objects: {
      Usuario: Prisma.$usuarioPayload<ExtArgs>
      regular: Prisma.$regularPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
    }, ExtArgs["result"]["ayudante"]>
    composites: {}
  }

  type ayudanteGetPayload<S extends boolean | null | undefined | ayudanteDefaultArgs> = $Result.GetResult<Prisma.$ayudantePayload, S>

  type ayudanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ayudanteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AyudanteCountAggregateInputType | true
    }

  export interface ayudanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ayudante'], meta: { name: 'ayudante' } }
    /**
     * Find zero or one Ayudante that matches the filter.
     * @param {ayudanteFindUniqueArgs} args - Arguments to find a Ayudante
     * @example
     * // Get one Ayudante
     * const ayudante = await prisma.ayudante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ayudanteFindUniqueArgs>(args: SelectSubset<T, ayudanteFindUniqueArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ayudante that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ayudanteFindUniqueOrThrowArgs} args - Arguments to find a Ayudante
     * @example
     * // Get one Ayudante
     * const ayudante = await prisma.ayudante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ayudanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ayudanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ayudante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteFindFirstArgs} args - Arguments to find a Ayudante
     * @example
     * // Get one Ayudante
     * const ayudante = await prisma.ayudante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ayudanteFindFirstArgs>(args?: SelectSubset<T, ayudanteFindFirstArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ayudante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteFindFirstOrThrowArgs} args - Arguments to find a Ayudante
     * @example
     * // Get one Ayudante
     * const ayudante = await prisma.ayudante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ayudanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ayudanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ayudantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayudantes
     * const ayudantes = await prisma.ayudante.findMany()
     * 
     * // Get first 10 Ayudantes
     * const ayudantes = await prisma.ayudante.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const ayudanteWithId_usuarioOnly = await prisma.ayudante.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends ayudanteFindManyArgs>(args?: SelectSubset<T, ayudanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ayudante.
     * @param {ayudanteCreateArgs} args - Arguments to create a Ayudante.
     * @example
     * // Create one Ayudante
     * const Ayudante = await prisma.ayudante.create({
     *   data: {
     *     // ... data to create a Ayudante
     *   }
     * })
     * 
     */
    create<T extends ayudanteCreateArgs>(args: SelectSubset<T, ayudanteCreateArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ayudantes.
     * @param {ayudanteCreateManyArgs} args - Arguments to create many Ayudantes.
     * @example
     * // Create many Ayudantes
     * const ayudante = await prisma.ayudante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ayudanteCreateManyArgs>(args?: SelectSubset<T, ayudanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ayudante.
     * @param {ayudanteDeleteArgs} args - Arguments to delete one Ayudante.
     * @example
     * // Delete one Ayudante
     * const Ayudante = await prisma.ayudante.delete({
     *   where: {
     *     // ... filter to delete one Ayudante
     *   }
     * })
     * 
     */
    delete<T extends ayudanteDeleteArgs>(args: SelectSubset<T, ayudanteDeleteArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ayudante.
     * @param {ayudanteUpdateArgs} args - Arguments to update one Ayudante.
     * @example
     * // Update one Ayudante
     * const ayudante = await prisma.ayudante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ayudanteUpdateArgs>(args: SelectSubset<T, ayudanteUpdateArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ayudantes.
     * @param {ayudanteDeleteManyArgs} args - Arguments to filter Ayudantes to delete.
     * @example
     * // Delete a few Ayudantes
     * const { count } = await prisma.ayudante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ayudanteDeleteManyArgs>(args?: SelectSubset<T, ayudanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayudantes
     * const ayudante = await prisma.ayudante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ayudanteUpdateManyArgs>(args: SelectSubset<T, ayudanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ayudante.
     * @param {ayudanteUpsertArgs} args - Arguments to update or create a Ayudante.
     * @example
     * // Update or create a Ayudante
     * const ayudante = await prisma.ayudante.upsert({
     *   create: {
     *     // ... data to create a Ayudante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayudante we want to update
     *   }
     * })
     */
    upsert<T extends ayudanteUpsertArgs>(args: SelectSubset<T, ayudanteUpsertArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ayudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteCountArgs} args - Arguments to filter Ayudantes to count.
     * @example
     * // Count the number of Ayudantes
     * const count = await prisma.ayudante.count({
     *   where: {
     *     // ... the filter for the Ayudantes we want to count
     *   }
     * })
    **/
    count<T extends ayudanteCountArgs>(
      args?: Subset<T, ayudanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyudanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyudanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AyudanteAggregateArgs>(args: Subset<T, AyudanteAggregateArgs>): Prisma.PrismaPromise<GetAyudanteAggregateType<T>>

    /**
     * Group by Ayudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ayudanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ayudanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ayudanteGroupByArgs['orderBy'] }
        : { orderBy?: ayudanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ayudanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyudanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ayudante model
   */
  readonly fields: ayudanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ayudante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ayudanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    regular<T extends ayudante$regularArgs<ExtArgs> = {}>(args?: Subset<T, ayudante$regularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ayudante model
   */ 
  interface ayudanteFieldRefs {
    readonly id_usuario: FieldRef<"ayudante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ayudante findUnique
   */
  export type ayudanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter, which ayudante to fetch.
     */
    where: ayudanteWhereUniqueInput
  }

  /**
   * ayudante findUniqueOrThrow
   */
  export type ayudanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter, which ayudante to fetch.
     */
    where: ayudanteWhereUniqueInput
  }

  /**
   * ayudante findFirst
   */
  export type ayudanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter, which ayudante to fetch.
     */
    where?: ayudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ayudantes to fetch.
     */
    orderBy?: ayudanteOrderByWithRelationInput | ayudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ayudantes.
     */
    cursor?: ayudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ayudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ayudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ayudantes.
     */
    distinct?: AyudanteScalarFieldEnum | AyudanteScalarFieldEnum[]
  }

  /**
   * ayudante findFirstOrThrow
   */
  export type ayudanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter, which ayudante to fetch.
     */
    where?: ayudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ayudantes to fetch.
     */
    orderBy?: ayudanteOrderByWithRelationInput | ayudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ayudantes.
     */
    cursor?: ayudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ayudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ayudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ayudantes.
     */
    distinct?: AyudanteScalarFieldEnum | AyudanteScalarFieldEnum[]
  }

  /**
   * ayudante findMany
   */
  export type ayudanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter, which ayudantes to fetch.
     */
    where?: ayudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ayudantes to fetch.
     */
    orderBy?: ayudanteOrderByWithRelationInput | ayudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ayudantes.
     */
    cursor?: ayudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ayudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ayudantes.
     */
    skip?: number
    distinct?: AyudanteScalarFieldEnum | AyudanteScalarFieldEnum[]
  }

  /**
   * ayudante create
   */
  export type ayudanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * The data needed to create a ayudante.
     */
    data: XOR<ayudanteCreateInput, ayudanteUncheckedCreateInput>
  }

  /**
   * ayudante createMany
   */
  export type ayudanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ayudantes.
     */
    data: ayudanteCreateManyInput | ayudanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ayudante update
   */
  export type ayudanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * The data needed to update a ayudante.
     */
    data: XOR<ayudanteUpdateInput, ayudanteUncheckedUpdateInput>
    /**
     * Choose, which ayudante to update.
     */
    where: ayudanteWhereUniqueInput
  }

  /**
   * ayudante updateMany
   */
  export type ayudanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ayudantes.
     */
    data: XOR<ayudanteUpdateManyMutationInput, ayudanteUncheckedUpdateManyInput>
    /**
     * Filter which ayudantes to update
     */
    where?: ayudanteWhereInput
  }

  /**
   * ayudante upsert
   */
  export type ayudanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * The filter to search for the ayudante to update in case it exists.
     */
    where: ayudanteWhereUniqueInput
    /**
     * In case the ayudante found by the `where` argument doesn't exist, create a new ayudante with this data.
     */
    create: XOR<ayudanteCreateInput, ayudanteUncheckedCreateInput>
    /**
     * In case the ayudante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ayudanteUpdateInput, ayudanteUncheckedUpdateInput>
  }

  /**
   * ayudante delete
   */
  export type ayudanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    /**
     * Filter which ayudante to delete.
     */
    where: ayudanteWhereUniqueInput
  }

  /**
   * ayudante deleteMany
   */
  export type ayudanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ayudantes to delete
     */
    where?: ayudanteWhereInput
  }

  /**
   * ayudante.regular
   */
  export type ayudante$regularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    where?: regularWhereInput
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    cursor?: regularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * ayudante without action
   */
  export type ayudanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
  }


  /**
   * Model especial
   */

  export type AggregateEspecial = {
    _count: EspecialCountAggregateOutputType | null
    _avg: EspecialAvgAggregateOutputType | null
    _sum: EspecialSumAggregateOutputType | null
    _min: EspecialMinAggregateOutputType | null
    _max: EspecialMaxAggregateOutputType | null
  }

  export type EspecialAvgAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type EspecialSumAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type EspecialMinAggregateOutputType = {
    descripcion: string | null
    motivo: string | null
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type EspecialMaxAggregateOutputType = {
    descripcion: string | null
    motivo: string | null
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type EspecialCountAggregateOutputType = {
    descripcion: number
    motivo: number
    id_prestamo: number
    id_usuario: number
    _all: number
  }


  export type EspecialAvgAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type EspecialSumAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type EspecialMinAggregateInputType = {
    descripcion?: true
    motivo?: true
    id_prestamo?: true
    id_usuario?: true
  }

  export type EspecialMaxAggregateInputType = {
    descripcion?: true
    motivo?: true
    id_prestamo?: true
    id_usuario?: true
  }

  export type EspecialCountAggregateInputType = {
    descripcion?: true
    motivo?: true
    id_prestamo?: true
    id_usuario?: true
    _all?: true
  }

  export type EspecialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especial to aggregate.
     */
    where?: especialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especials to fetch.
     */
    orderBy?: especialOrderByWithRelationInput | especialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: especialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned especials
    **/
    _count?: true | EspecialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialMaxAggregateInputType
  }

  export type GetEspecialAggregateType<T extends EspecialAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecial[P]>
      : GetScalarType<T[P], AggregateEspecial[P]>
  }




  export type especialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: especialWhereInput
    orderBy?: especialOrderByWithAggregationInput | especialOrderByWithAggregationInput[]
    by: EspecialScalarFieldEnum[] | EspecialScalarFieldEnum
    having?: especialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialCountAggregateInputType | true
    _avg?: EspecialAvgAggregateInputType
    _sum?: EspecialSumAggregateInputType
    _min?: EspecialMinAggregateInputType
    _max?: EspecialMaxAggregateInputType
  }

  export type EspecialGroupByOutputType = {
    descripcion: string
    motivo: string
    id_prestamo: number
    id_usuario: number | null
    _count: EspecialCountAggregateOutputType | null
    _avg: EspecialAvgAggregateOutputType | null
    _sum: EspecialSumAggregateOutputType | null
    _min: EspecialMinAggregateOutputType | null
    _max: EspecialMaxAggregateOutputType | null
  }

  type GetEspecialGroupByPayload<T extends especialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialGroupByOutputType[P]>
        }
      >
    >


  export type especialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    descripcion?: boolean
    motivo?: boolean
    id_prestamo?: boolean
    id_usuario?: boolean
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    admin?: boolean | especial$adminArgs<ExtArgs>
  }, ExtArgs["result"]["especial"]>


  export type especialSelectScalar = {
    descripcion?: boolean
    motivo?: boolean
    id_prestamo?: boolean
    id_usuario?: boolean
  }

  export type especialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    admin?: boolean | especial$adminArgs<ExtArgs>
  }

  export type $especialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "especial"
    objects: {
      prestamo: Prisma.$prestamoPayload<ExtArgs>
      admin: Prisma.$adminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      descripcion: string
      motivo: string
      id_prestamo: number
      id_usuario: number | null
    }, ExtArgs["result"]["especial"]>
    composites: {}
  }

  type especialGetPayload<S extends boolean | null | undefined | especialDefaultArgs> = $Result.GetResult<Prisma.$especialPayload, S>

  type especialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<especialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EspecialCountAggregateInputType | true
    }

  export interface especialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['especial'], meta: { name: 'especial' } }
    /**
     * Find zero or one Especial that matches the filter.
     * @param {especialFindUniqueArgs} args - Arguments to find a Especial
     * @example
     * // Get one Especial
     * const especial = await prisma.especial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends especialFindUniqueArgs>(args: SelectSubset<T, especialFindUniqueArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Especial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {especialFindUniqueOrThrowArgs} args - Arguments to find a Especial
     * @example
     * // Get one Especial
     * const especial = await prisma.especial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends especialFindUniqueOrThrowArgs>(args: SelectSubset<T, especialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Especial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialFindFirstArgs} args - Arguments to find a Especial
     * @example
     * // Get one Especial
     * const especial = await prisma.especial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends especialFindFirstArgs>(args?: SelectSubset<T, especialFindFirstArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Especial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialFindFirstOrThrowArgs} args - Arguments to find a Especial
     * @example
     * // Get one Especial
     * const especial = await prisma.especial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends especialFindFirstOrThrowArgs>(args?: SelectSubset<T, especialFindFirstOrThrowArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Especials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especials
     * const especials = await prisma.especial.findMany()
     * 
     * // Get first 10 Especials
     * const especials = await prisma.especial.findMany({ take: 10 })
     * 
     * // Only select the `descripcion`
     * const especialWithDescripcionOnly = await prisma.especial.findMany({ select: { descripcion: true } })
     * 
     */
    findMany<T extends especialFindManyArgs>(args?: SelectSubset<T, especialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Especial.
     * @param {especialCreateArgs} args - Arguments to create a Especial.
     * @example
     * // Create one Especial
     * const Especial = await prisma.especial.create({
     *   data: {
     *     // ... data to create a Especial
     *   }
     * })
     * 
     */
    create<T extends especialCreateArgs>(args: SelectSubset<T, especialCreateArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Especials.
     * @param {especialCreateManyArgs} args - Arguments to create many Especials.
     * @example
     * // Create many Especials
     * const especial = await prisma.especial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends especialCreateManyArgs>(args?: SelectSubset<T, especialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especial.
     * @param {especialDeleteArgs} args - Arguments to delete one Especial.
     * @example
     * // Delete one Especial
     * const Especial = await prisma.especial.delete({
     *   where: {
     *     // ... filter to delete one Especial
     *   }
     * })
     * 
     */
    delete<T extends especialDeleteArgs>(args: SelectSubset<T, especialDeleteArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Especial.
     * @param {especialUpdateArgs} args - Arguments to update one Especial.
     * @example
     * // Update one Especial
     * const especial = await prisma.especial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends especialUpdateArgs>(args: SelectSubset<T, especialUpdateArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Especials.
     * @param {especialDeleteManyArgs} args - Arguments to filter Especials to delete.
     * @example
     * // Delete a few Especials
     * const { count } = await prisma.especial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends especialDeleteManyArgs>(args?: SelectSubset<T, especialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especials
     * const especial = await prisma.especial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends especialUpdateManyArgs>(args: SelectSubset<T, especialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especial.
     * @param {especialUpsertArgs} args - Arguments to update or create a Especial.
     * @example
     * // Update or create a Especial
     * const especial = await prisma.especial.upsert({
     *   create: {
     *     // ... data to create a Especial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especial we want to update
     *   }
     * })
     */
    upsert<T extends especialUpsertArgs>(args: SelectSubset<T, especialUpsertArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Especials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialCountArgs} args - Arguments to filter Especials to count.
     * @example
     * // Count the number of Especials
     * const count = await prisma.especial.count({
     *   where: {
     *     // ... the filter for the Especials we want to count
     *   }
     * })
    **/
    count<T extends especialCountArgs>(
      args?: Subset<T, especialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EspecialAggregateArgs>(args: Subset<T, EspecialAggregateArgs>): Prisma.PrismaPromise<GetEspecialAggregateType<T>>

    /**
     * Group by Especial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends especialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: especialGroupByArgs['orderBy'] }
        : { orderBy?: especialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, especialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the especial model
   */
  readonly fields: especialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for especial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__especialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo<T extends prestamoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prestamoDefaultArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends especial$adminArgs<ExtArgs> = {}>(args?: Subset<T, especial$adminArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the especial model
   */ 
  interface especialFieldRefs {
    readonly descripcion: FieldRef<"especial", 'String'>
    readonly motivo: FieldRef<"especial", 'String'>
    readonly id_prestamo: FieldRef<"especial", 'Int'>
    readonly id_usuario: FieldRef<"especial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * especial findUnique
   */
  export type especialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter, which especial to fetch.
     */
    where: especialWhereUniqueInput
  }

  /**
   * especial findUniqueOrThrow
   */
  export type especialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter, which especial to fetch.
     */
    where: especialWhereUniqueInput
  }

  /**
   * especial findFirst
   */
  export type especialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter, which especial to fetch.
     */
    where?: especialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especials to fetch.
     */
    orderBy?: especialOrderByWithRelationInput | especialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especials.
     */
    cursor?: especialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especials.
     */
    distinct?: EspecialScalarFieldEnum | EspecialScalarFieldEnum[]
  }

  /**
   * especial findFirstOrThrow
   */
  export type especialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter, which especial to fetch.
     */
    where?: especialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especials to fetch.
     */
    orderBy?: especialOrderByWithRelationInput | especialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especials.
     */
    cursor?: especialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especials.
     */
    distinct?: EspecialScalarFieldEnum | EspecialScalarFieldEnum[]
  }

  /**
   * especial findMany
   */
  export type especialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter, which especials to fetch.
     */
    where?: especialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especials to fetch.
     */
    orderBy?: especialOrderByWithRelationInput | especialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing especials.
     */
    cursor?: especialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especials.
     */
    skip?: number
    distinct?: EspecialScalarFieldEnum | EspecialScalarFieldEnum[]
  }

  /**
   * especial create
   */
  export type especialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * The data needed to create a especial.
     */
    data: XOR<especialCreateInput, especialUncheckedCreateInput>
  }

  /**
   * especial createMany
   */
  export type especialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many especials.
     */
    data: especialCreateManyInput | especialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * especial update
   */
  export type especialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * The data needed to update a especial.
     */
    data: XOR<especialUpdateInput, especialUncheckedUpdateInput>
    /**
     * Choose, which especial to update.
     */
    where: especialWhereUniqueInput
  }

  /**
   * especial updateMany
   */
  export type especialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update especials.
     */
    data: XOR<especialUpdateManyMutationInput, especialUncheckedUpdateManyInput>
    /**
     * Filter which especials to update
     */
    where?: especialWhereInput
  }

  /**
   * especial upsert
   */
  export type especialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * The filter to search for the especial to update in case it exists.
     */
    where: especialWhereUniqueInput
    /**
     * In case the especial found by the `where` argument doesn't exist, create a new especial with this data.
     */
    create: XOR<especialCreateInput, especialUncheckedCreateInput>
    /**
     * In case the especial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<especialUpdateInput, especialUncheckedUpdateInput>
  }

  /**
   * especial delete
   */
  export type especialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    /**
     * Filter which especial to delete.
     */
    where: especialWhereUniqueInput
  }

  /**
   * especial deleteMany
   */
  export type especialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especials to delete
     */
    where?: especialWhereInput
  }

  /**
   * especial.admin
   */
  export type especial$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
  }

  /**
   * especial without action
   */
  export type especialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
  }


  /**
   * Model prestamo
   */

  export type AggregatePrestamo = {
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  export type PrestamoAvgAggregateOutputType = {
    id_prestamo: number | null
  }

  export type PrestamoSumAggregateOutputType = {
    id_prestamo: number | null
  }

  export type PrestamoMinAggregateOutputType = {
    id_prestamo: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_dici: string | null
  }

  export type PrestamoMaxAggregateOutputType = {
    id_prestamo: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_dici: string | null
  }

  export type PrestamoCountAggregateOutputType = {
    id_prestamo: number
    fecha_inicio: number
    fecha_fin: number
    id_dici: number
    _all: number
  }


  export type PrestamoAvgAggregateInputType = {
    id_prestamo?: true
  }

  export type PrestamoSumAggregateInputType = {
    id_prestamo?: true
  }

  export type PrestamoMinAggregateInputType = {
    id_prestamo?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_dici?: true
  }

  export type PrestamoMaxAggregateInputType = {
    id_prestamo?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_dici?: true
  }

  export type PrestamoCountAggregateInputType = {
    id_prestamo?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_dici?: true
    _all?: true
  }

  export type PrestamoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamo to aggregate.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestamos
    **/
    _count?: true | PrestamoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamoMaxAggregateInputType
  }

  export type GetPrestamoAggregateType<T extends PrestamoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamo[P]>
      : GetScalarType<T[P], AggregatePrestamo[P]>
  }




  export type prestamoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamoWhereInput
    orderBy?: prestamoOrderByWithAggregationInput | prestamoOrderByWithAggregationInput[]
    by: PrestamoScalarFieldEnum[] | PrestamoScalarFieldEnum
    having?: prestamoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamoCountAggregateInputType | true
    _avg?: PrestamoAvgAggregateInputType
    _sum?: PrestamoSumAggregateInputType
    _min?: PrestamoMinAggregateInputType
    _max?: PrestamoMaxAggregateInputType
  }

  export type PrestamoGroupByOutputType = {
    id_prestamo: number
    fecha_inicio: Date
    fecha_fin: Date | null
    id_dici: string
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  type GetPrestamoGroupByPayload<T extends prestamoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
        }
      >
    >


  export type prestamoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_dici?: boolean
    especial?: boolean | prestamo$especialArgs<ExtArgs>
    recursos?: boolean | prestamo$recursosArgs<ExtArgs>
    regular?: boolean | prestamo$regularArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>


  export type prestamoSelectScalar = {
    id_prestamo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_dici?: boolean
  }

  export type prestamoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especial?: boolean | prestamo$especialArgs<ExtArgs>
    recursos?: boolean | prestamo$recursosArgs<ExtArgs>
    regular?: boolean | prestamo$regularArgs<ExtArgs>
  }

  export type $prestamoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestamo"
    objects: {
      especial: Prisma.$especialPayload<ExtArgs> | null
      recursos: Prisma.$recursoPayload<ExtArgs> | null
      regular: Prisma.$regularPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      fecha_inicio: Date
      fecha_fin: Date | null
      id_dici: string
    }, ExtArgs["result"]["prestamo"]>
    composites: {}
  }

  type prestamoGetPayload<S extends boolean | null | undefined | prestamoDefaultArgs> = $Result.GetResult<Prisma.$prestamoPayload, S>

  type prestamoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<prestamoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PrestamoCountAggregateInputType | true
    }

  export interface prestamoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestamo'], meta: { name: 'prestamo' } }
    /**
     * Find zero or one Prestamo that matches the filter.
     * @param {prestamoFindUniqueArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestamoFindUniqueArgs>(args: SelectSubset<T, prestamoFindUniqueArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Prestamo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {prestamoFindUniqueOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestamoFindUniqueOrThrowArgs>(args: SelectSubset<T, prestamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Prestamo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindFirstArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestamoFindFirstArgs>(args?: SelectSubset<T, prestamoFindFirstArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Prestamo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindFirstOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestamoFindFirstOrThrowArgs>(args?: SelectSubset<T, prestamoFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamo.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamo.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends prestamoFindManyArgs>(args?: SelectSubset<T, prestamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Prestamo.
     * @param {prestamoCreateArgs} args - Arguments to create a Prestamo.
     * @example
     * // Create one Prestamo
     * const Prestamo = await prisma.prestamo.create({
     *   data: {
     *     // ... data to create a Prestamo
     *   }
     * })
     * 
     */
    create<T extends prestamoCreateArgs>(args: SelectSubset<T, prestamoCreateArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Prestamos.
     * @param {prestamoCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestamoCreateManyArgs>(args?: SelectSubset<T, prestamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prestamo.
     * @param {prestamoDeleteArgs} args - Arguments to delete one Prestamo.
     * @example
     * // Delete one Prestamo
     * const Prestamo = await prisma.prestamo.delete({
     *   where: {
     *     // ... filter to delete one Prestamo
     *   }
     * })
     * 
     */
    delete<T extends prestamoDeleteArgs>(args: SelectSubset<T, prestamoDeleteArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Prestamo.
     * @param {prestamoUpdateArgs} args - Arguments to update one Prestamo.
     * @example
     * // Update one Prestamo
     * const prestamo = await prisma.prestamo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestamoUpdateArgs>(args: SelectSubset<T, prestamoUpdateArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Prestamos.
     * @param {prestamoDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestamoDeleteManyArgs>(args?: SelectSubset<T, prestamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestamoUpdateManyArgs>(args: SelectSubset<T, prestamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prestamo.
     * @param {prestamoUpsertArgs} args - Arguments to update or create a Prestamo.
     * @example
     * // Update or create a Prestamo
     * const prestamo = await prisma.prestamo.upsert({
     *   create: {
     *     // ... data to create a Prestamo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamo we want to update
     *   }
     * })
     */
    upsert<T extends prestamoUpsertArgs>(args: SelectSubset<T, prestamoUpsertArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamo.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends prestamoCountArgs>(
      args?: Subset<T, prestamoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestamoAggregateArgs>(args: Subset<T, PrestamoAggregateArgs>): Prisma.PrismaPromise<GetPrestamoAggregateType<T>>

    /**
     * Group by Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prestamoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestamoGroupByArgs['orderBy'] }
        : { orderBy?: prestamoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prestamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestamo model
   */
  readonly fields: prestamoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestamo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestamoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especial<T extends prestamo$especialArgs<ExtArgs> = {}>(args?: Subset<T, prestamo$especialArgs<ExtArgs>>): Prisma__especialClient<$Result.GetResult<Prisma.$especialPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    recursos<T extends prestamo$recursosArgs<ExtArgs> = {}>(args?: Subset<T, prestamo$recursosArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    regular<T extends prestamo$regularArgs<ExtArgs> = {}>(args?: Subset<T, prestamo$regularArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prestamo model
   */ 
  interface prestamoFieldRefs {
    readonly id_prestamo: FieldRef<"prestamo", 'Int'>
    readonly fecha_inicio: FieldRef<"prestamo", 'DateTime'>
    readonly fecha_fin: FieldRef<"prestamo", 'DateTime'>
    readonly id_dici: FieldRef<"prestamo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prestamo findUnique
   */
  export type prestamoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo findUniqueOrThrow
   */
  export type prestamoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo findFirst
   */
  export type prestamoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo findFirstOrThrow
   */
  export type prestamoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo findMany
   */
  export type prestamoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo create
   */
  export type prestamoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The data needed to create a prestamo.
     */
    data: XOR<prestamoCreateInput, prestamoUncheckedCreateInput>
  }

  /**
   * prestamo createMany
   */
  export type prestamoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestamos.
     */
    data: prestamoCreateManyInput | prestamoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestamo update
   */
  export type prestamoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The data needed to update a prestamo.
     */
    data: XOR<prestamoUpdateInput, prestamoUncheckedUpdateInput>
    /**
     * Choose, which prestamo to update.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo updateMany
   */
  export type prestamoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamoUpdateManyMutationInput, prestamoUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamoWhereInput
  }

  /**
   * prestamo upsert
   */
  export type prestamoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The filter to search for the prestamo to update in case it exists.
     */
    where: prestamoWhereUniqueInput
    /**
     * In case the prestamo found by the `where` argument doesn't exist, create a new prestamo with this data.
     */
    create: XOR<prestamoCreateInput, prestamoUncheckedCreateInput>
    /**
     * In case the prestamo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestamoUpdateInput, prestamoUncheckedUpdateInput>
  }

  /**
   * prestamo delete
   */
  export type prestamoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter which prestamo to delete.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo deleteMany
   */
  export type prestamoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to delete
     */
    where?: prestamoWhereInput
  }

  /**
   * prestamo.especial
   */
  export type prestamo$especialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especial
     */
    select?: especialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialInclude<ExtArgs> | null
    where?: especialWhereInput
  }

  /**
   * prestamo.recursos
   */
  export type prestamo$recursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    where?: recursoWhereInput
  }

  /**
   * prestamo.regular
   */
  export type prestamo$regularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    where?: regularWhereInput
  }

  /**
   * prestamo without action
   */
  export type prestamoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
  }


  /**
   * Model regular
   */

  export type AggregateRegular = {
    _count: RegularCountAggregateOutputType | null
    _avg: RegularAvgAggregateOutputType | null
    _sum: RegularSumAggregateOutputType | null
    _min: RegularMinAggregateOutputType | null
    _max: RegularMaxAggregateOutputType | null
  }

  export type RegularAvgAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type RegularSumAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type RegularMinAggregateOutputType = {
    hora_inicio: Date | null
    hora_fin: Date | null
    id_prestamo: number | null
    rut: string | null
    id_usuario: number | null
  }

  export type RegularMaxAggregateOutputType = {
    hora_inicio: Date | null
    hora_fin: Date | null
    id_prestamo: number | null
    rut: string | null
    id_usuario: number | null
  }

  export type RegularCountAggregateOutputType = {
    hora_inicio: number
    hora_fin: number
    id_prestamo: number
    rut: number
    id_usuario: number
    _all: number
  }


  export type RegularAvgAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type RegularSumAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type RegularMinAggregateInputType = {
    hora_inicio?: true
    hora_fin?: true
    id_prestamo?: true
    rut?: true
    id_usuario?: true
  }

  export type RegularMaxAggregateInputType = {
    hora_inicio?: true
    hora_fin?: true
    id_prestamo?: true
    rut?: true
    id_usuario?: true
  }

  export type RegularCountAggregateInputType = {
    hora_inicio?: true
    hora_fin?: true
    id_prestamo?: true
    rut?: true
    id_usuario?: true
    _all?: true
  }

  export type RegularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regular to aggregate.
     */
    where?: regularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulars to fetch.
     */
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regulars
    **/
    _count?: true | RegularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegularMaxAggregateInputType
  }

  export type GetRegularAggregateType<T extends RegularAggregateArgs> = {
        [P in keyof T & keyof AggregateRegular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegular[P]>
      : GetScalarType<T[P], AggregateRegular[P]>
  }




  export type regularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regularWhereInput
    orderBy?: regularOrderByWithAggregationInput | regularOrderByWithAggregationInput[]
    by: RegularScalarFieldEnum[] | RegularScalarFieldEnum
    having?: regularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegularCountAggregateInputType | true
    _avg?: RegularAvgAggregateInputType
    _sum?: RegularSumAggregateInputType
    _min?: RegularMinAggregateInputType
    _max?: RegularMaxAggregateInputType
  }

  export type RegularGroupByOutputType = {
    hora_inicio: Date
    hora_fin: Date | null
    id_prestamo: number
    rut: string
    id_usuario: number
    _count: RegularCountAggregateOutputType | null
    _avg: RegularAvgAggregateOutputType | null
    _sum: RegularSumAggregateOutputType | null
    _min: RegularMinAggregateOutputType | null
    _max: RegularMaxAggregateOutputType | null
  }

  type GetRegularGroupByPayload<T extends regularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegularGroupByOutputType[P]>
            : GetScalarType<T[P], RegularGroupByOutputType[P]>
        }
      >
    >


  export type regularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hora_inicio?: boolean
    hora_fin?: boolean
    id_prestamo?: boolean
    rut?: boolean
    id_usuario?: boolean
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    Estudiante?: boolean | regular$EstudianteArgs<ExtArgs>
    ayudante?: boolean | regular$ayudanteArgs<ExtArgs>
  }, ExtArgs["result"]["regular"]>


  export type regularSelectScalar = {
    hora_inicio?: boolean
    hora_fin?: boolean
    id_prestamo?: boolean
    rut?: boolean
    id_usuario?: boolean
  }

  export type regularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    Estudiante?: boolean | regular$EstudianteArgs<ExtArgs>
    ayudante?: boolean | regular$ayudanteArgs<ExtArgs>
  }

  export type $regularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regular"
    objects: {
      prestamo: Prisma.$prestamoPayload<ExtArgs>
      Estudiante: Prisma.$estudiantePayload<ExtArgs> | null
      ayudante: Prisma.$ayudantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      hora_inicio: Date
      hora_fin: Date | null
      id_prestamo: number
      rut: string
      id_usuario: number
    }, ExtArgs["result"]["regular"]>
    composites: {}
  }

  type regularGetPayload<S extends boolean | null | undefined | regularDefaultArgs> = $Result.GetResult<Prisma.$regularPayload, S>

  type regularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<regularFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegularCountAggregateInputType | true
    }

  export interface regularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regular'], meta: { name: 'regular' } }
    /**
     * Find zero or one Regular that matches the filter.
     * @param {regularFindUniqueArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regularFindUniqueArgs>(args: SelectSubset<T, regularFindUniqueArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Regular that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {regularFindUniqueOrThrowArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regularFindUniqueOrThrowArgs>(args: SelectSubset<T, regularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Regular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularFindFirstArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regularFindFirstArgs>(args?: SelectSubset<T, regularFindFirstArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Regular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularFindFirstOrThrowArgs} args - Arguments to find a Regular
     * @example
     * // Get one Regular
     * const regular = await prisma.regular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regularFindFirstOrThrowArgs>(args?: SelectSubset<T, regularFindFirstOrThrowArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Regulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regulars
     * const regulars = await prisma.regular.findMany()
     * 
     * // Get first 10 Regulars
     * const regulars = await prisma.regular.findMany({ take: 10 })
     * 
     * // Only select the `hora_inicio`
     * const regularWithHora_inicioOnly = await prisma.regular.findMany({ select: { hora_inicio: true } })
     * 
     */
    findMany<T extends regularFindManyArgs>(args?: SelectSubset<T, regularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Regular.
     * @param {regularCreateArgs} args - Arguments to create a Regular.
     * @example
     * // Create one Regular
     * const Regular = await prisma.regular.create({
     *   data: {
     *     // ... data to create a Regular
     *   }
     * })
     * 
     */
    create<T extends regularCreateArgs>(args: SelectSubset<T, regularCreateArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Regulars.
     * @param {regularCreateManyArgs} args - Arguments to create many Regulars.
     * @example
     * // Create many Regulars
     * const regular = await prisma.regular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regularCreateManyArgs>(args?: SelectSubset<T, regularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regular.
     * @param {regularDeleteArgs} args - Arguments to delete one Regular.
     * @example
     * // Delete one Regular
     * const Regular = await prisma.regular.delete({
     *   where: {
     *     // ... filter to delete one Regular
     *   }
     * })
     * 
     */
    delete<T extends regularDeleteArgs>(args: SelectSubset<T, regularDeleteArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Regular.
     * @param {regularUpdateArgs} args - Arguments to update one Regular.
     * @example
     * // Update one Regular
     * const regular = await prisma.regular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regularUpdateArgs>(args: SelectSubset<T, regularUpdateArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Regulars.
     * @param {regularDeleteManyArgs} args - Arguments to filter Regulars to delete.
     * @example
     * // Delete a few Regulars
     * const { count } = await prisma.regular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regularDeleteManyArgs>(args?: SelectSubset<T, regularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regulars
     * const regular = await prisma.regular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regularUpdateManyArgs>(args: SelectSubset<T, regularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regular.
     * @param {regularUpsertArgs} args - Arguments to update or create a Regular.
     * @example
     * // Update or create a Regular
     * const regular = await prisma.regular.upsert({
     *   create: {
     *     // ... data to create a Regular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regular we want to update
     *   }
     * })
     */
    upsert<T extends regularUpsertArgs>(args: SelectSubset<T, regularUpsertArgs<ExtArgs>>): Prisma__regularClient<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Regulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularCountArgs} args - Arguments to filter Regulars to count.
     * @example
     * // Count the number of Regulars
     * const count = await prisma.regular.count({
     *   where: {
     *     // ... the filter for the Regulars we want to count
     *   }
     * })
    **/
    count<T extends regularCountArgs>(
      args?: Subset<T, regularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegularAggregateArgs>(args: Subset<T, RegularAggregateArgs>): Prisma.PrismaPromise<GetRegularAggregateType<T>>

    /**
     * Group by Regular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regularGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends regularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regularGroupByArgs['orderBy'] }
        : { orderBy?: regularGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, regularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regular model
   */
  readonly fields: regularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo<T extends prestamoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prestamoDefaultArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Estudiante<T extends regular$EstudianteArgs<ExtArgs> = {}>(args?: Subset<T, regular$EstudianteArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ayudante<T extends regular$ayudanteArgs<ExtArgs> = {}>(args?: Subset<T, regular$ayudanteArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the regular model
   */ 
  interface regularFieldRefs {
    readonly hora_inicio: FieldRef<"regular", 'DateTime'>
    readonly hora_fin: FieldRef<"regular", 'DateTime'>
    readonly id_prestamo: FieldRef<"regular", 'Int'>
    readonly rut: FieldRef<"regular", 'String'>
    readonly id_usuario: FieldRef<"regular", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * regular findUnique
   */
  export type regularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter, which regular to fetch.
     */
    where: regularWhereUniqueInput
  }

  /**
   * regular findUniqueOrThrow
   */
  export type regularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter, which regular to fetch.
     */
    where: regularWhereUniqueInput
  }

  /**
   * regular findFirst
   */
  export type regularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter, which regular to fetch.
     */
    where?: regularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulars to fetch.
     */
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regulars.
     */
    cursor?: regularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regulars.
     */
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * regular findFirstOrThrow
   */
  export type regularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter, which regular to fetch.
     */
    where?: regularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulars to fetch.
     */
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regulars.
     */
    cursor?: regularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regulars.
     */
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * regular findMany
   */
  export type regularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter, which regulars to fetch.
     */
    where?: regularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regulars to fetch.
     */
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regulars.
     */
    cursor?: regularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regulars.
     */
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * regular create
   */
  export type regularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * The data needed to create a regular.
     */
    data: XOR<regularCreateInput, regularUncheckedCreateInput>
  }

  /**
   * regular createMany
   */
  export type regularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regulars.
     */
    data: regularCreateManyInput | regularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regular update
   */
  export type regularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * The data needed to update a regular.
     */
    data: XOR<regularUpdateInput, regularUncheckedUpdateInput>
    /**
     * Choose, which regular to update.
     */
    where: regularWhereUniqueInput
  }

  /**
   * regular updateMany
   */
  export type regularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regulars.
     */
    data: XOR<regularUpdateManyMutationInput, regularUncheckedUpdateManyInput>
    /**
     * Filter which regulars to update
     */
    where?: regularWhereInput
  }

  /**
   * regular upsert
   */
  export type regularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * The filter to search for the regular to update in case it exists.
     */
    where: regularWhereUniqueInput
    /**
     * In case the regular found by the `where` argument doesn't exist, create a new regular with this data.
     */
    create: XOR<regularCreateInput, regularUncheckedCreateInput>
    /**
     * In case the regular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regularUpdateInput, regularUncheckedUpdateInput>
  }

  /**
   * regular delete
   */
  export type regularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    /**
     * Filter which regular to delete.
     */
    where: regularWhereUniqueInput
  }

  /**
   * regular deleteMany
   */
  export type regularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regulars to delete
     */
    where?: regularWhereInput
  }

  /**
   * regular.Estudiante
   */
  export type regular$EstudianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    where?: estudianteWhereInput
  }

  /**
   * regular.ayudante
   */
  export type regular$ayudanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    where?: ayudanteWhereInput
  }

  /**
   * regular without action
   */
  export type regularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
  }


  /**
   * Model sanciones
   */

  export type AggregateSanciones = {
    _count: SancionesCountAggregateOutputType | null
    _avg: SancionesAvgAggregateOutputType | null
    _sum: SancionesSumAggregateOutputType | null
    _min: SancionesMinAggregateOutputType | null
    _max: SancionesMaxAggregateOutputType | null
  }

  export type SancionesAvgAggregateOutputType = {
    grado: number | null
    id_sanciones: number | null
    id_usuario: number | null
  }

  export type SancionesSumAggregateOutputType = {
    grado: number | null
    id_sanciones: number | null
    id_usuario: number | null
  }

  export type SancionesMinAggregateOutputType = {
    grado: number | null
    id_sanciones: number | null
    comentario: string | null
    estado_sancion: string | null
    id_usuario: number | null
    rut: string | null
  }

  export type SancionesMaxAggregateOutputType = {
    grado: number | null
    id_sanciones: number | null
    comentario: string | null
    estado_sancion: string | null
    id_usuario: number | null
    rut: string | null
  }

  export type SancionesCountAggregateOutputType = {
    grado: number
    id_sanciones: number
    comentario: number
    estado_sancion: number
    id_usuario: number
    rut: number
    _all: number
  }


  export type SancionesAvgAggregateInputType = {
    grado?: true
    id_sanciones?: true
    id_usuario?: true
  }

  export type SancionesSumAggregateInputType = {
    grado?: true
    id_sanciones?: true
    id_usuario?: true
  }

  export type SancionesMinAggregateInputType = {
    grado?: true
    id_sanciones?: true
    comentario?: true
    estado_sancion?: true
    id_usuario?: true
    rut?: true
  }

  export type SancionesMaxAggregateInputType = {
    grado?: true
    id_sanciones?: true
    comentario?: true
    estado_sancion?: true
    id_usuario?: true
    rut?: true
  }

  export type SancionesCountAggregateInputType = {
    grado?: true
    id_sanciones?: true
    comentario?: true
    estado_sancion?: true
    id_usuario?: true
    rut?: true
    _all?: true
  }

  export type SancionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sanciones to aggregate.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sanciones
    **/
    _count?: true | SancionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SancionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SancionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SancionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SancionesMaxAggregateInputType
  }

  export type GetSancionesAggregateType<T extends SancionesAggregateArgs> = {
        [P in keyof T & keyof AggregateSanciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanciones[P]>
      : GetScalarType<T[P], AggregateSanciones[P]>
  }




  export type sancionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sancionesWhereInput
    orderBy?: sancionesOrderByWithAggregationInput | sancionesOrderByWithAggregationInput[]
    by: SancionesScalarFieldEnum[] | SancionesScalarFieldEnum
    having?: sancionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SancionesCountAggregateInputType | true
    _avg?: SancionesAvgAggregateInputType
    _sum?: SancionesSumAggregateInputType
    _min?: SancionesMinAggregateInputType
    _max?: SancionesMaxAggregateInputType
  }

  export type SancionesGroupByOutputType = {
    grado: number
    id_sanciones: number
    comentario: string
    estado_sancion: string
    id_usuario: number
    rut: string
    _count: SancionesCountAggregateOutputType | null
    _avg: SancionesAvgAggregateOutputType | null
    _sum: SancionesSumAggregateOutputType | null
    _min: SancionesMinAggregateOutputType | null
    _max: SancionesMaxAggregateOutputType | null
  }

  type GetSancionesGroupByPayload<T extends sancionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SancionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SancionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SancionesGroupByOutputType[P]>
            : GetScalarType<T[P], SancionesGroupByOutputType[P]>
        }
      >
    >


  export type sancionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    grado?: boolean
    id_sanciones?: boolean
    comentario?: boolean
    estado_sancion?: boolean
    id_usuario?: boolean
    rut?: boolean
    Usuario?: boolean | sanciones$UsuarioArgs<ExtArgs>
    Estudiante?: boolean | sanciones$EstudianteArgs<ExtArgs>
  }, ExtArgs["result"]["sanciones"]>


  export type sancionesSelectScalar = {
    grado?: boolean
    id_sanciones?: boolean
    comentario?: boolean
    estado_sancion?: boolean
    id_usuario?: boolean
    rut?: boolean
  }

  export type sancionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | sanciones$UsuarioArgs<ExtArgs>
    Estudiante?: boolean | sanciones$EstudianteArgs<ExtArgs>
  }

  export type $sancionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sanciones"
    objects: {
      Usuario: Prisma.$usuarioPayload<ExtArgs> | null
      Estudiante: Prisma.$estudiantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      grado: number
      id_sanciones: number
      comentario: string
      estado_sancion: string
      id_usuario: number
      rut: string
    }, ExtArgs["result"]["sanciones"]>
    composites: {}
  }

  type sancionesGetPayload<S extends boolean | null | undefined | sancionesDefaultArgs> = $Result.GetResult<Prisma.$sancionesPayload, S>

  type sancionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sancionesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SancionesCountAggregateInputType | true
    }

  export interface sancionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sanciones'], meta: { name: 'sanciones' } }
    /**
     * Find zero or one Sanciones that matches the filter.
     * @param {sancionesFindUniqueArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sancionesFindUniqueArgs>(args: SelectSubset<T, sancionesFindUniqueArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sanciones that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sancionesFindUniqueOrThrowArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sancionesFindUniqueOrThrowArgs>(args: SelectSubset<T, sancionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindFirstArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sancionesFindFirstArgs>(args?: SelectSubset<T, sancionesFindFirstArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sanciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindFirstOrThrowArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sancionesFindFirstOrThrowArgs>(args?: SelectSubset<T, sancionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sanciones
     * const sanciones = await prisma.sanciones.findMany()
     * 
     * // Get first 10 Sanciones
     * const sanciones = await prisma.sanciones.findMany({ take: 10 })
     * 
     * // Only select the `grado`
     * const sancionesWithGradoOnly = await prisma.sanciones.findMany({ select: { grado: true } })
     * 
     */
    findMany<T extends sancionesFindManyArgs>(args?: SelectSubset<T, sancionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sanciones.
     * @param {sancionesCreateArgs} args - Arguments to create a Sanciones.
     * @example
     * // Create one Sanciones
     * const Sanciones = await prisma.sanciones.create({
     *   data: {
     *     // ... data to create a Sanciones
     *   }
     * })
     * 
     */
    create<T extends sancionesCreateArgs>(args: SelectSubset<T, sancionesCreateArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sanciones.
     * @param {sancionesCreateManyArgs} args - Arguments to create many Sanciones.
     * @example
     * // Create many Sanciones
     * const sanciones = await prisma.sanciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sancionesCreateManyArgs>(args?: SelectSubset<T, sancionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sanciones.
     * @param {sancionesDeleteArgs} args - Arguments to delete one Sanciones.
     * @example
     * // Delete one Sanciones
     * const Sanciones = await prisma.sanciones.delete({
     *   where: {
     *     // ... filter to delete one Sanciones
     *   }
     * })
     * 
     */
    delete<T extends sancionesDeleteArgs>(args: SelectSubset<T, sancionesDeleteArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sanciones.
     * @param {sancionesUpdateArgs} args - Arguments to update one Sanciones.
     * @example
     * // Update one Sanciones
     * const sanciones = await prisma.sanciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sancionesUpdateArgs>(args: SelectSubset<T, sancionesUpdateArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sanciones.
     * @param {sancionesDeleteManyArgs} args - Arguments to filter Sanciones to delete.
     * @example
     * // Delete a few Sanciones
     * const { count } = await prisma.sanciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sancionesDeleteManyArgs>(args?: SelectSubset<T, sancionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sanciones
     * const sanciones = await prisma.sanciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sancionesUpdateManyArgs>(args: SelectSubset<T, sancionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sanciones.
     * @param {sancionesUpsertArgs} args - Arguments to update or create a Sanciones.
     * @example
     * // Update or create a Sanciones
     * const sanciones = await prisma.sanciones.upsert({
     *   create: {
     *     // ... data to create a Sanciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sanciones we want to update
     *   }
     * })
     */
    upsert<T extends sancionesUpsertArgs>(args: SelectSubset<T, sancionesUpsertArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesCountArgs} args - Arguments to filter Sanciones to count.
     * @example
     * // Count the number of Sanciones
     * const count = await prisma.sanciones.count({
     *   where: {
     *     // ... the filter for the Sanciones we want to count
     *   }
     * })
    **/
    count<T extends sancionesCountArgs>(
      args?: Subset<T, sancionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SancionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SancionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SancionesAggregateArgs>(args: Subset<T, SancionesAggregateArgs>): Prisma.PrismaPromise<GetSancionesAggregateType<T>>

    /**
     * Group by Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sancionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sancionesGroupByArgs['orderBy'] }
        : { orderBy?: sancionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sancionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSancionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sanciones model
   */
  readonly fields: sancionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sanciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sancionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends sanciones$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, sanciones$UsuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Estudiante<T extends sanciones$EstudianteArgs<ExtArgs> = {}>(args?: Subset<T, sanciones$EstudianteArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sanciones model
   */ 
  interface sancionesFieldRefs {
    readonly grado: FieldRef<"sanciones", 'Int'>
    readonly id_sanciones: FieldRef<"sanciones", 'Int'>
    readonly comentario: FieldRef<"sanciones", 'String'>
    readonly estado_sancion: FieldRef<"sanciones", 'String'>
    readonly id_usuario: FieldRef<"sanciones", 'Int'>
    readonly rut: FieldRef<"sanciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sanciones findUnique
   */
  export type sancionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones findUniqueOrThrow
   */
  export type sancionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones findFirst
   */
  export type sancionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sanciones.
     */
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones findFirstOrThrow
   */
  export type sancionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sanciones.
     */
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones findMany
   */
  export type sancionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones create
   */
  export type sancionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The data needed to create a sanciones.
     */
    data: XOR<sancionesCreateInput, sancionesUncheckedCreateInput>
  }

  /**
   * sanciones createMany
   */
  export type sancionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sanciones.
     */
    data: sancionesCreateManyInput | sancionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sanciones update
   */
  export type sancionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The data needed to update a sanciones.
     */
    data: XOR<sancionesUpdateInput, sancionesUncheckedUpdateInput>
    /**
     * Choose, which sanciones to update.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones updateMany
   */
  export type sancionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sanciones.
     */
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyInput>
    /**
     * Filter which sanciones to update
     */
    where?: sancionesWhereInput
  }

  /**
   * sanciones upsert
   */
  export type sancionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The filter to search for the sanciones to update in case it exists.
     */
    where: sancionesWhereUniqueInput
    /**
     * In case the sanciones found by the `where` argument doesn't exist, create a new sanciones with this data.
     */
    create: XOR<sancionesCreateInput, sancionesUncheckedCreateInput>
    /**
     * In case the sanciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sancionesUpdateInput, sancionesUncheckedUpdateInput>
  }

  /**
   * sanciones delete
   */
  export type sancionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter which sanciones to delete.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones deleteMany
   */
  export type sancionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sanciones to delete
     */
    where?: sancionesWhereInput
  }

  /**
   * sanciones.Usuario
   */
  export type sanciones$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * sanciones.Estudiante
   */
  export type sanciones$EstudianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    where?: estudianteWhereInput
  }

  /**
   * sanciones without action
   */
  export type sancionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    fecha_creacion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    fecha_creacion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre_categoria: number
    fecha_creacion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    fecha_creacion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    fecha_creacion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    fecha_creacion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre_categoria: string
    fecha_creacion: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    fecha_creacion?: boolean
    recurso?: boolean | categoria$recursoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>


  export type categoriaSelectScalar = {
    id_categoria?: boolean
    nombre_categoria?: boolean
    fecha_creacion?: boolean
  }

  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurso?: boolean | categoria$recursoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      recurso: Prisma.$recursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre_categoria: string
      fecha_creacion: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recurso<T extends categoria$recursoArgs<ExtArgs> = {}>(args?: Subset<T, categoria$recursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoria model
   */ 
  interface categoriaFieldRefs {
    readonly id_categoria: FieldRef<"categoria", 'Int'>
    readonly nombre_categoria: FieldRef<"categoria", 'String'>
    readonly fecha_creacion: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
  }

  /**
   * categoria.recurso
   */
  export type categoria$recursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    where?: recursoWhereInput
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    cursor?: recursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    ingreso: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    ingreso: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    nombre: string | null
    rut: string | null
    correo: string | null
    direccion: string | null
    fono: string | null
    ingreso: number | null
    estado_estudiante: string | null
  }

  export type EstudianteMaxAggregateOutputType = {
    nombre: string | null
    rut: string | null
    correo: string | null
    direccion: string | null
    fono: string | null
    ingreso: number | null
    estado_estudiante: string | null
  }

  export type EstudianteCountAggregateOutputType = {
    nombre: number
    rut: number
    correo: number
    direccion: number
    fono: number
    ingreso: number
    estado_estudiante: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    ingreso?: true
  }

  export type EstudianteSumAggregateInputType = {
    ingreso?: true
  }

  export type EstudianteMinAggregateInputType = {
    nombre?: true
    rut?: true
    correo?: true
    direccion?: true
    fono?: true
    ingreso?: true
    estado_estudiante?: true
  }

  export type EstudianteMaxAggregateInputType = {
    nombre?: true
    rut?: true
    correo?: true
    direccion?: true
    fono?: true
    ingreso?: true
    estado_estudiante?: true
  }

  export type EstudianteCountAggregateInputType = {
    nombre?: true
    rut?: true
    correo?: true
    direccion?: true
    fono?: true
    ingreso?: true
    estado_estudiante?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estudiante to aggregate.
     */
    where?: estudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiantes to fetch.
     */
    orderBy?: estudianteOrderByWithRelationInput | estudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type estudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estudianteWhereInput
    orderBy?: estudianteOrderByWithAggregationInput | estudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: estudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    nombre: string
    rut: string
    correo: string | null
    direccion: string | null
    fono: string | null
    ingreso: number | null
    estado_estudiante: string | null
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends estudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type estudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    rut?: boolean
    correo?: boolean
    direccion?: boolean
    fono?: boolean
    ingreso?: boolean
    estado_estudiante?: boolean
    regular?: boolean | estudiante$regularArgs<ExtArgs>
    sanciones?: boolean | estudiante$sancionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>


  export type estudianteSelectScalar = {
    nombre?: boolean
    rut?: boolean
    correo?: boolean
    direccion?: boolean
    fono?: boolean
    ingreso?: boolean
    estado_estudiante?: boolean
  }

  export type estudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regular?: boolean | estudiante$regularArgs<ExtArgs>
    sanciones?: boolean | estudiante$sancionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estudiante"
    objects: {
      regular: Prisma.$regularPayload<ExtArgs>[]
      sanciones: Prisma.$sancionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      rut: string
      correo: string | null
      direccion: string | null
      fono: string | null
      ingreso: number | null
      estado_estudiante: string | null
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type estudianteGetPayload<S extends boolean | null | undefined | estudianteDefaultArgs> = $Result.GetResult<Prisma.$estudiantePayload, S>

  type estudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<estudianteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface estudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estudiante'], meta: { name: 'estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {estudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estudianteFindUniqueArgs>(args: SelectSubset<T, estudianteFindUniqueArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {estudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, estudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estudianteFindFirstArgs>(args?: SelectSubset<T, estudianteFindFirstArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, estudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `nombre`
     * const estudianteWithNombreOnly = await prisma.estudiante.findMany({ select: { nombre: true } })
     * 
     */
    findMany<T extends estudianteFindManyArgs>(args?: SelectSubset<T, estudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Estudiante.
     * @param {estudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends estudianteCreateArgs>(args: SelectSubset<T, estudianteCreateArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Estudiantes.
     * @param {estudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estudianteCreateManyArgs>(args?: SelectSubset<T, estudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudiante.
     * @param {estudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends estudianteDeleteArgs>(args: SelectSubset<T, estudianteDeleteArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Estudiante.
     * @param {estudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estudianteUpdateArgs>(args: SelectSubset<T, estudianteUpdateArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Estudiantes.
     * @param {estudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estudianteDeleteManyArgs>(args?: SelectSubset<T, estudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estudianteUpdateManyArgs>(args: SelectSubset<T, estudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudiante.
     * @param {estudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends estudianteUpsertArgs>(args: SelectSubset<T, estudianteUpsertArgs<ExtArgs>>): Prisma__estudianteClient<$Result.GetResult<Prisma.$estudiantePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends estudianteCountArgs>(
      args?: Subset<T, estudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estudianteGroupByArgs['orderBy'] }
        : { orderBy?: estudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estudiante model
   */
  readonly fields: estudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regular<T extends estudiante$regularArgs<ExtArgs> = {}>(args?: Subset<T, estudiante$regularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regularPayload<ExtArgs>, T, "findMany"> | Null>
    sanciones<T extends estudiante$sancionesArgs<ExtArgs> = {}>(args?: Subset<T, estudiante$sancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estudiante model
   */ 
  interface estudianteFieldRefs {
    readonly nombre: FieldRef<"estudiante", 'String'>
    readonly rut: FieldRef<"estudiante", 'String'>
    readonly correo: FieldRef<"estudiante", 'String'>
    readonly direccion: FieldRef<"estudiante", 'String'>
    readonly fono: FieldRef<"estudiante", 'String'>
    readonly ingreso: FieldRef<"estudiante", 'Int'>
    readonly estado_estudiante: FieldRef<"estudiante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estudiante findUnique
   */
  export type estudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter, which estudiante to fetch.
     */
    where: estudianteWhereUniqueInput
  }

  /**
   * estudiante findUniqueOrThrow
   */
  export type estudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter, which estudiante to fetch.
     */
    where: estudianteWhereUniqueInput
  }

  /**
   * estudiante findFirst
   */
  export type estudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter, which estudiante to fetch.
     */
    where?: estudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiantes to fetch.
     */
    orderBy?: estudianteOrderByWithRelationInput | estudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estudiantes.
     */
    cursor?: estudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * estudiante findFirstOrThrow
   */
  export type estudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter, which estudiante to fetch.
     */
    where?: estudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiantes to fetch.
     */
    orderBy?: estudianteOrderByWithRelationInput | estudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estudiantes.
     */
    cursor?: estudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * estudiante findMany
   */
  export type estudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter, which estudiantes to fetch.
     */
    where?: estudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiantes to fetch.
     */
    orderBy?: estudianteOrderByWithRelationInput | estudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estudiantes.
     */
    cursor?: estudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * estudiante create
   */
  export type estudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a estudiante.
     */
    data: XOR<estudianteCreateInput, estudianteUncheckedCreateInput>
  }

  /**
   * estudiante createMany
   */
  export type estudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estudiantes.
     */
    data: estudianteCreateManyInput | estudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estudiante update
   */
  export type estudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a estudiante.
     */
    data: XOR<estudianteUpdateInput, estudianteUncheckedUpdateInput>
    /**
     * Choose, which estudiante to update.
     */
    where: estudianteWhereUniqueInput
  }

  /**
   * estudiante updateMany
   */
  export type estudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estudiantes.
     */
    data: XOR<estudianteUpdateManyMutationInput, estudianteUncheckedUpdateManyInput>
    /**
     * Filter which estudiantes to update
     */
    where?: estudianteWhereInput
  }

  /**
   * estudiante upsert
   */
  export type estudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the estudiante to update in case it exists.
     */
    where: estudianteWhereUniqueInput
    /**
     * In case the estudiante found by the `where` argument doesn't exist, create a new estudiante with this data.
     */
    create: XOR<estudianteCreateInput, estudianteUncheckedCreateInput>
    /**
     * In case the estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estudianteUpdateInput, estudianteUncheckedUpdateInput>
  }

  /**
   * estudiante delete
   */
  export type estudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
    /**
     * Filter which estudiante to delete.
     */
    where: estudianteWhereUniqueInput
  }

  /**
   * estudiante deleteMany
   */
  export type estudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estudiantes to delete
     */
    where?: estudianteWhereInput
  }

  /**
   * estudiante.regular
   */
  export type estudiante$regularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regular
     */
    select?: regularSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regularInclude<ExtArgs> | null
    where?: regularWhereInput
    orderBy?: regularOrderByWithRelationInput | regularOrderByWithRelationInput[]
    cursor?: regularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularScalarFieldEnum | RegularScalarFieldEnum[]
  }

  /**
   * estudiante.sanciones
   */
  export type estudiante$sancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    where?: sancionesWhereInput
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    cursor?: sancionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * estudiante without action
   */
  export type estudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante
     */
    select?: estudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudianteInclude<ExtArgs> | null
  }


  /**
   * Model recurso
   */

  export type AggregateRecurso = {
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  export type RecursoAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type RecursoSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type RecursoMinAggregateOutputType = {
    nombre: string | null
    marca: string | null
    descripcion: string | null
    fecha_ingreso: Date | null
    modelo: string | null
    estado_recurso: boolean | null
    id_categoria: number | null
    id_dici: string | null
    id_uta: string | null
    ubicacion: string | null
  }

  export type RecursoMaxAggregateOutputType = {
    nombre: string | null
    marca: string | null
    descripcion: string | null
    fecha_ingreso: Date | null
    modelo: string | null
    estado_recurso: boolean | null
    id_categoria: number | null
    id_dici: string | null
    id_uta: string | null
    ubicacion: string | null
  }

  export type RecursoCountAggregateOutputType = {
    nombre: number
    marca: number
    descripcion: number
    fecha_ingreso: number
    modelo: number
    estado_recurso: number
    id_categoria: number
    id_dici: number
    id_uta: number
    ubicacion: number
    _all: number
  }


  export type RecursoAvgAggregateInputType = {
    id_categoria?: true
  }

  export type RecursoSumAggregateInputType = {
    id_categoria?: true
  }

  export type RecursoMinAggregateInputType = {
    nombre?: true
    marca?: true
    descripcion?: true
    fecha_ingreso?: true
    modelo?: true
    estado_recurso?: true
    id_categoria?: true
    id_dici?: true
    id_uta?: true
    ubicacion?: true
  }

  export type RecursoMaxAggregateInputType = {
    nombre?: true
    marca?: true
    descripcion?: true
    fecha_ingreso?: true
    modelo?: true
    estado_recurso?: true
    id_categoria?: true
    id_dici?: true
    id_uta?: true
    ubicacion?: true
  }

  export type RecursoCountAggregateInputType = {
    nombre?: true
    marca?: true
    descripcion?: true
    fecha_ingreso?: true
    modelo?: true
    estado_recurso?: true
    id_categoria?: true
    id_dici?: true
    id_uta?: true
    ubicacion?: true
    _all?: true
  }

  export type RecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurso to aggregate.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recursos
    **/
    _count?: true | RecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecursoMaxAggregateInputType
  }

  export type GetRecursoAggregateType<T extends RecursoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurso[P]>
      : GetScalarType<T[P], AggregateRecurso[P]>
  }




  export type recursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recursoWhereInput
    orderBy?: recursoOrderByWithAggregationInput | recursoOrderByWithAggregationInput[]
    by: RecursoScalarFieldEnum[] | RecursoScalarFieldEnum
    having?: recursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecursoCountAggregateInputType | true
    _avg?: RecursoAvgAggregateInputType
    _sum?: RecursoSumAggregateInputType
    _min?: RecursoMinAggregateInputType
    _max?: RecursoMaxAggregateInputType
  }

  export type RecursoGroupByOutputType = {
    nombre: string
    marca: string | null
    descripcion: string | null
    fecha_ingreso: Date | null
    modelo: string | null
    estado_recurso: boolean
    id_categoria: number | null
    id_dici: string
    id_uta: string | null
    ubicacion: string | null
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  type GetRecursoGroupByPayload<T extends recursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecursoGroupByOutputType[P]>
            : GetScalarType<T[P], RecursoGroupByOutputType[P]>
        }
      >
    >


  export type recursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    marca?: boolean
    descripcion?: boolean
    fecha_ingreso?: boolean
    modelo?: boolean
    estado_recurso?: boolean
    id_categoria?: boolean
    id_dici?: boolean
    id_uta?: boolean
    ubicacion?: boolean
    categoria?: boolean | recurso$categoriaArgs<ExtArgs>
    prestamo?: boolean | recurso$prestamoArgs<ExtArgs>
    _count?: boolean | RecursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>


  export type recursoSelectScalar = {
    nombre?: boolean
    marca?: boolean
    descripcion?: boolean
    fecha_ingreso?: boolean
    modelo?: boolean
    estado_recurso?: boolean
    id_categoria?: boolean
    id_dici?: boolean
    id_uta?: boolean
    ubicacion?: boolean
  }

  export type recursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | recurso$categoriaArgs<ExtArgs>
    prestamo?: boolean | recurso$prestamoArgs<ExtArgs>
    _count?: boolean | RecursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $recursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recurso"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      prestamo: Prisma.$prestamoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      marca: string | null
      descripcion: string | null
      fecha_ingreso: Date | null
      modelo: string | null
      estado_recurso: boolean
      id_categoria: number | null
      id_dici: string
      id_uta: string | null
      ubicacion: string | null
    }, ExtArgs["result"]["recurso"]>
    composites: {}
  }

  type recursoGetPayload<S extends boolean | null | undefined | recursoDefaultArgs> = $Result.GetResult<Prisma.$recursoPayload, S>

  type recursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecursoCountAggregateInputType | true
    }

  export interface recursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recurso'], meta: { name: 'recurso' } }
    /**
     * Find zero or one Recurso that matches the filter.
     * @param {recursoFindUniqueArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recursoFindUniqueArgs>(args: SelectSubset<T, recursoFindUniqueArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recurso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {recursoFindUniqueOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recursoFindUniqueOrThrowArgs>(args: SelectSubset<T, recursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindFirstArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recursoFindFirstArgs>(args?: SelectSubset<T, recursoFindFirstArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindFirstOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recursoFindFirstOrThrowArgs>(args?: SelectSubset<T, recursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recursos
     * const recursos = await prisma.recurso.findMany()
     * 
     * // Get first 10 Recursos
     * const recursos = await prisma.recurso.findMany({ take: 10 })
     * 
     * // Only select the `nombre`
     * const recursoWithNombreOnly = await prisma.recurso.findMany({ select: { nombre: true } })
     * 
     */
    findMany<T extends recursoFindManyArgs>(args?: SelectSubset<T, recursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recurso.
     * @param {recursoCreateArgs} args - Arguments to create a Recurso.
     * @example
     * // Create one Recurso
     * const Recurso = await prisma.recurso.create({
     *   data: {
     *     // ... data to create a Recurso
     *   }
     * })
     * 
     */
    create<T extends recursoCreateArgs>(args: SelectSubset<T, recursoCreateArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recursos.
     * @param {recursoCreateManyArgs} args - Arguments to create many Recursos.
     * @example
     * // Create many Recursos
     * const recurso = await prisma.recurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recursoCreateManyArgs>(args?: SelectSubset<T, recursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recurso.
     * @param {recursoDeleteArgs} args - Arguments to delete one Recurso.
     * @example
     * // Delete one Recurso
     * const Recurso = await prisma.recurso.delete({
     *   where: {
     *     // ... filter to delete one Recurso
     *   }
     * })
     * 
     */
    delete<T extends recursoDeleteArgs>(args: SelectSubset<T, recursoDeleteArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recurso.
     * @param {recursoUpdateArgs} args - Arguments to update one Recurso.
     * @example
     * // Update one Recurso
     * const recurso = await prisma.recurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recursoUpdateArgs>(args: SelectSubset<T, recursoUpdateArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recursos.
     * @param {recursoDeleteManyArgs} args - Arguments to filter Recursos to delete.
     * @example
     * // Delete a few Recursos
     * const { count } = await prisma.recurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recursoDeleteManyArgs>(args?: SelectSubset<T, recursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recursos
     * const recurso = await prisma.recurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recursoUpdateManyArgs>(args: SelectSubset<T, recursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recurso.
     * @param {recursoUpsertArgs} args - Arguments to update or create a Recurso.
     * @example
     * // Update or create a Recurso
     * const recurso = await prisma.recurso.upsert({
     *   create: {
     *     // ... data to create a Recurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurso we want to update
     *   }
     * })
     */
    upsert<T extends recursoUpsertArgs>(args: SelectSubset<T, recursoUpsertArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoCountArgs} args - Arguments to filter Recursos to count.
     * @example
     * // Count the number of Recursos
     * const count = await prisma.recurso.count({
     *   where: {
     *     // ... the filter for the Recursos we want to count
     *   }
     * })
    **/
    count<T extends recursoCountArgs>(
      args?: Subset<T, recursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecursoAggregateArgs>(args: Subset<T, RecursoAggregateArgs>): Prisma.PrismaPromise<GetRecursoAggregateType<T>>

    /**
     * Group by Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recursoGroupByArgs['orderBy'] }
        : { orderBy?: recursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recurso model
   */
  readonly fields: recursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends recurso$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, recurso$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    prestamo<T extends recurso$prestamoArgs<ExtArgs> = {}>(args?: Subset<T, recurso$prestamoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recurso model
   */ 
  interface recursoFieldRefs {
    readonly nombre: FieldRef<"recurso", 'String'>
    readonly marca: FieldRef<"recurso", 'String'>
    readonly descripcion: FieldRef<"recurso", 'String'>
    readonly fecha_ingreso: FieldRef<"recurso", 'DateTime'>
    readonly modelo: FieldRef<"recurso", 'String'>
    readonly estado_recurso: FieldRef<"recurso", 'Boolean'>
    readonly id_categoria: FieldRef<"recurso", 'Int'>
    readonly id_dici: FieldRef<"recurso", 'String'>
    readonly id_uta: FieldRef<"recurso", 'String'>
    readonly ubicacion: FieldRef<"recurso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * recurso findUnique
   */
  export type recursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso findUniqueOrThrow
   */
  export type recursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso findFirst
   */
  export type recursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso findFirstOrThrow
   */
  export type recursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso findMany
   */
  export type recursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recursos to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso create
   */
  export type recursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The data needed to create a recurso.
     */
    data: XOR<recursoCreateInput, recursoUncheckedCreateInput>
  }

  /**
   * recurso createMany
   */
  export type recursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recursos.
     */
    data: recursoCreateManyInput | recursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recurso update
   */
  export type recursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The data needed to update a recurso.
     */
    data: XOR<recursoUpdateInput, recursoUncheckedUpdateInput>
    /**
     * Choose, which recurso to update.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso updateMany
   */
  export type recursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recursos.
     */
    data: XOR<recursoUpdateManyMutationInput, recursoUncheckedUpdateManyInput>
    /**
     * Filter which recursos to update
     */
    where?: recursoWhereInput
  }

  /**
   * recurso upsert
   */
  export type recursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The filter to search for the recurso to update in case it exists.
     */
    where: recursoWhereUniqueInput
    /**
     * In case the recurso found by the `where` argument doesn't exist, create a new recurso with this data.
     */
    create: XOR<recursoCreateInput, recursoUncheckedCreateInput>
    /**
     * In case the recurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recursoUpdateInput, recursoUncheckedUpdateInput>
  }

  /**
   * recurso delete
   */
  export type recursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter which recurso to delete.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso deleteMany
   */
  export type recursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recursos to delete
     */
    where?: recursoWhereInput
  }

  /**
   * recurso.categoria
   */
  export type recurso$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * recurso.prestamo
   */
  export type recurso$prestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    where?: prestamoWhereInput
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    cursor?: prestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * recurso without action
   */
  export type recursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    usuario: string | null
    correo: string | null
    password: string | null
    rut: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    usuario: string | null
    correo: string | null
    password: string | null
    rut: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    usuario: number
    correo: number
    password: number
    rut: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    usuario?: true
    correo?: true
    password?: true
    rut?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    usuario?: true
    correo?: true
    password?: true
    rut?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    usuario?: true
    correo?: true
    password?: true
    rut?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    password?: boolean
    rut?: boolean
    admin?: boolean | usuario$adminArgs<ExtArgs>
    ayudante?: boolean | usuario$ayudanteArgs<ExtArgs>
    sanciones?: boolean | usuario$sancionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    password?: boolean
    rut?: boolean
  }

  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | usuario$adminArgs<ExtArgs>
    ayudante?: boolean | usuario$ayudanteArgs<ExtArgs>
    sanciones?: boolean | usuario$sancionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs> | null
      ayudante: Prisma.$ayudantePayload<ExtArgs> | null
      sanciones: Prisma.$sancionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      usuario: string
      correo: string
      password: string
      rut: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends usuario$adminArgs<ExtArgs> = {}>(args?: Subset<T, usuario$adminArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ayudante<T extends usuario$ayudanteArgs<ExtArgs> = {}>(args?: Subset<T, usuario$ayudanteArgs<ExtArgs>>): Prisma__ayudanteClient<$Result.GetResult<Prisma.$ayudantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sanciones<T extends usuario$sancionesArgs<ExtArgs> = {}>(args?: Subset<T, usuario$sancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly rut: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario.admin
   */
  export type usuario$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
  }

  /**
   * usuario.ayudante
   */
  export type usuario$ayudanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ayudante
     */
    select?: ayudanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ayudanteInclude<ExtArgs> | null
    where?: ayudanteWhereInput
  }

  /**
   * usuario.sanciones
   */
  export type usuario$sancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    where?: sancionesWhereInput
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    cursor?: sancionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id_usuario: 'id_usuario'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AyudanteScalarFieldEnum: {
    id_usuario: 'id_usuario'
  };

  export type AyudanteScalarFieldEnum = (typeof AyudanteScalarFieldEnum)[keyof typeof AyudanteScalarFieldEnum]


  export const EspecialScalarFieldEnum: {
    descripcion: 'descripcion',
    motivo: 'motivo',
    id_prestamo: 'id_prestamo',
    id_usuario: 'id_usuario'
  };

  export type EspecialScalarFieldEnum = (typeof EspecialScalarFieldEnum)[keyof typeof EspecialScalarFieldEnum]


  export const PrestamoScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    id_dici: 'id_dici'
  };

  export type PrestamoScalarFieldEnum = (typeof PrestamoScalarFieldEnum)[keyof typeof PrestamoScalarFieldEnum]


  export const RegularScalarFieldEnum: {
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin',
    id_prestamo: 'id_prestamo',
    rut: 'rut',
    id_usuario: 'id_usuario'
  };

  export type RegularScalarFieldEnum = (typeof RegularScalarFieldEnum)[keyof typeof RegularScalarFieldEnum]


  export const SancionesScalarFieldEnum: {
    grado: 'grado',
    id_sanciones: 'id_sanciones',
    comentario: 'comentario',
    estado_sancion: 'estado_sancion',
    id_usuario: 'id_usuario',
    rut: 'rut'
  };

  export type SancionesScalarFieldEnum = (typeof SancionesScalarFieldEnum)[keyof typeof SancionesScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre_categoria: 'nombre_categoria',
    fecha_creacion: 'fecha_creacion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    nombre: 'nombre',
    rut: 'rut',
    correo: 'correo',
    direccion: 'direccion',
    fono: 'fono',
    ingreso: 'ingreso',
    estado_estudiante: 'estado_estudiante'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const RecursoScalarFieldEnum: {
    nombre: 'nombre',
    marca: 'marca',
    descripcion: 'descripcion',
    fecha_ingreso: 'fecha_ingreso',
    modelo: 'modelo',
    estado_recurso: 'estado_recurso',
    id_categoria: 'id_categoria',
    id_dici: 'id_dici',
    id_uta: 'id_uta',
    ubicacion: 'ubicacion'
  };

  export type RecursoScalarFieldEnum = (typeof RecursoScalarFieldEnum)[keyof typeof RecursoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    usuario: 'usuario',
    correo: 'correo',
    password: 'password',
    rut: 'rut'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id_usuario?: IntFilter<"admin"> | number
    Usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    especial?: EspecialListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id_usuario?: SortOrder
    Usuario?: usuarioOrderByWithRelationInput
    especial?: especialOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    Usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    especial?: EspecialListRelationFilter
  }, "id_usuario">

  export type adminOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"admin"> | number
  }

  export type ayudanteWhereInput = {
    AND?: ayudanteWhereInput | ayudanteWhereInput[]
    OR?: ayudanteWhereInput[]
    NOT?: ayudanteWhereInput | ayudanteWhereInput[]
    id_usuario?: IntFilter<"ayudante"> | number
    Usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    regular?: RegularListRelationFilter
  }

  export type ayudanteOrderByWithRelationInput = {
    id_usuario?: SortOrder
    Usuario?: usuarioOrderByWithRelationInput
    regular?: regularOrderByRelationAggregateInput
  }

  export type ayudanteWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: ayudanteWhereInput | ayudanteWhereInput[]
    OR?: ayudanteWhereInput[]
    NOT?: ayudanteWhereInput | ayudanteWhereInput[]
    Usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    regular?: RegularListRelationFilter
  }, "id_usuario">

  export type ayudanteOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    _count?: ayudanteCountOrderByAggregateInput
    _avg?: ayudanteAvgOrderByAggregateInput
    _max?: ayudanteMaxOrderByAggregateInput
    _min?: ayudanteMinOrderByAggregateInput
    _sum?: ayudanteSumOrderByAggregateInput
  }

  export type ayudanteScalarWhereWithAggregatesInput = {
    AND?: ayudanteScalarWhereWithAggregatesInput | ayudanteScalarWhereWithAggregatesInput[]
    OR?: ayudanteScalarWhereWithAggregatesInput[]
    NOT?: ayudanteScalarWhereWithAggregatesInput | ayudanteScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"ayudante"> | number
  }

  export type especialWhereInput = {
    AND?: especialWhereInput | especialWhereInput[]
    OR?: especialWhereInput[]
    NOT?: especialWhereInput | especialWhereInput[]
    descripcion?: StringFilter<"especial"> | string
    motivo?: StringFilter<"especial"> | string
    id_prestamo?: IntFilter<"especial"> | number
    id_usuario?: IntNullableFilter<"especial"> | number | null
    prestamo?: XOR<PrestamoRelationFilter, prestamoWhereInput>
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
  }

  export type especialOrderByWithRelationInput = {
    descripcion?: SortOrder
    motivo?: SortOrder
    id_prestamo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    prestamo?: prestamoOrderByWithRelationInput
    admin?: adminOrderByWithRelationInput
  }

  export type especialWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: especialWhereInput | especialWhereInput[]
    OR?: especialWhereInput[]
    NOT?: especialWhereInput | especialWhereInput[]
    descripcion?: StringFilter<"especial"> | string
    motivo?: StringFilter<"especial"> | string
    id_usuario?: IntNullableFilter<"especial"> | number | null
    prestamo?: XOR<PrestamoRelationFilter, prestamoWhereInput>
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
  }, "id_prestamo">

  export type especialOrderByWithAggregationInput = {
    descripcion?: SortOrder
    motivo?: SortOrder
    id_prestamo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: especialCountOrderByAggregateInput
    _avg?: especialAvgOrderByAggregateInput
    _max?: especialMaxOrderByAggregateInput
    _min?: especialMinOrderByAggregateInput
    _sum?: especialSumOrderByAggregateInput
  }

  export type especialScalarWhereWithAggregatesInput = {
    AND?: especialScalarWhereWithAggregatesInput | especialScalarWhereWithAggregatesInput[]
    OR?: especialScalarWhereWithAggregatesInput[]
    NOT?: especialScalarWhereWithAggregatesInput | especialScalarWhereWithAggregatesInput[]
    descripcion?: StringWithAggregatesFilter<"especial"> | string
    motivo?: StringWithAggregatesFilter<"especial"> | string
    id_prestamo?: IntWithAggregatesFilter<"especial"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"especial"> | number | null
  }

  export type prestamoWhereInput = {
    AND?: prestamoWhereInput | prestamoWhereInput[]
    OR?: prestamoWhereInput[]
    NOT?: prestamoWhereInput | prestamoWhereInput[]
    id_prestamo?: IntFilter<"prestamo"> | number
    fecha_inicio?: DateTimeFilter<"prestamo"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_dici?: StringFilter<"prestamo"> | string
    especial?: XOR<EspecialNullableRelationFilter, especialWhereInput> | null
    recursos?: XOR<RecursoNullableRelationFilter, recursoWhereInput> | null
    regular?: XOR<RegularNullableRelationFilter, regularWhereInput> | null
  }

  export type prestamoOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_dici?: SortOrder
    especial?: especialOrderByWithRelationInput
    recursos?: recursoOrderByWithRelationInput
    regular?: regularOrderByWithRelationInput
  }

  export type prestamoWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: prestamoWhereInput | prestamoWhereInput[]
    OR?: prestamoWhereInput[]
    NOT?: prestamoWhereInput | prestamoWhereInput[]
    fecha_inicio?: DateTimeFilter<"prestamo"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_dici?: StringFilter<"prestamo"> | string
    especial?: XOR<EspecialNullableRelationFilter, especialWhereInput> | null
    recursos?: XOR<RecursoNullableRelationFilter, recursoWhereInput> | null
    regular?: XOR<RegularNullableRelationFilter, regularWhereInput> | null
  }, "id_prestamo">

  export type prestamoOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_dici?: SortOrder
    _count?: prestamoCountOrderByAggregateInput
    _avg?: prestamoAvgOrderByAggregateInput
    _max?: prestamoMaxOrderByAggregateInput
    _min?: prestamoMinOrderByAggregateInput
    _sum?: prestamoSumOrderByAggregateInput
  }

  export type prestamoScalarWhereWithAggregatesInput = {
    AND?: prestamoScalarWhereWithAggregatesInput | prestamoScalarWhereWithAggregatesInput[]
    OR?: prestamoScalarWhereWithAggregatesInput[]
    NOT?: prestamoScalarWhereWithAggregatesInput | prestamoScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"prestamo"> | number
    fecha_inicio?: DateTimeWithAggregatesFilter<"prestamo"> | Date | string
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"prestamo"> | Date | string | null
    id_dici?: StringWithAggregatesFilter<"prestamo"> | string
  }

  export type regularWhereInput = {
    AND?: regularWhereInput | regularWhereInput[]
    OR?: regularWhereInput[]
    NOT?: regularWhereInput | regularWhereInput[]
    hora_inicio?: DateTimeFilter<"regular"> | Date | string
    hora_fin?: DateTimeNullableFilter<"regular"> | Date | string | null
    id_prestamo?: IntFilter<"regular"> | number
    rut?: StringFilter<"regular"> | string
    id_usuario?: IntFilter<"regular"> | number
    prestamo?: XOR<PrestamoRelationFilter, prestamoWhereInput>
    Estudiante?: XOR<EstudianteNullableRelationFilter, estudianteWhereInput> | null
    ayudante?: XOR<AyudanteNullableRelationFilter, ayudanteWhereInput> | null
  }

  export type regularOrderByWithRelationInput = {
    hora_inicio?: SortOrder
    hora_fin?: SortOrderInput | SortOrder
    id_prestamo?: SortOrder
    rut?: SortOrder
    id_usuario?: SortOrder
    prestamo?: prestamoOrderByWithRelationInput
    Estudiante?: estudianteOrderByWithRelationInput
    ayudante?: ayudanteOrderByWithRelationInput
  }

  export type regularWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: regularWhereInput | regularWhereInput[]
    OR?: regularWhereInput[]
    NOT?: regularWhereInput | regularWhereInput[]
    hora_inicio?: DateTimeFilter<"regular"> | Date | string
    hora_fin?: DateTimeNullableFilter<"regular"> | Date | string | null
    rut?: StringFilter<"regular"> | string
    id_usuario?: IntFilter<"regular"> | number
    prestamo?: XOR<PrestamoRelationFilter, prestamoWhereInput>
    Estudiante?: XOR<EstudianteNullableRelationFilter, estudianteWhereInput> | null
    ayudante?: XOR<AyudanteNullableRelationFilter, ayudanteWhereInput> | null
  }, "id_prestamo">

  export type regularOrderByWithAggregationInput = {
    hora_inicio?: SortOrder
    hora_fin?: SortOrderInput | SortOrder
    id_prestamo?: SortOrder
    rut?: SortOrder
    id_usuario?: SortOrder
    _count?: regularCountOrderByAggregateInput
    _avg?: regularAvgOrderByAggregateInput
    _max?: regularMaxOrderByAggregateInput
    _min?: regularMinOrderByAggregateInput
    _sum?: regularSumOrderByAggregateInput
  }

  export type regularScalarWhereWithAggregatesInput = {
    AND?: regularScalarWhereWithAggregatesInput | regularScalarWhereWithAggregatesInput[]
    OR?: regularScalarWhereWithAggregatesInput[]
    NOT?: regularScalarWhereWithAggregatesInput | regularScalarWhereWithAggregatesInput[]
    hora_inicio?: DateTimeWithAggregatesFilter<"regular"> | Date | string
    hora_fin?: DateTimeNullableWithAggregatesFilter<"regular"> | Date | string | null
    id_prestamo?: IntWithAggregatesFilter<"regular"> | number
    rut?: StringWithAggregatesFilter<"regular"> | string
    id_usuario?: IntWithAggregatesFilter<"regular"> | number
  }

  export type sancionesWhereInput = {
    AND?: sancionesWhereInput | sancionesWhereInput[]
    OR?: sancionesWhereInput[]
    NOT?: sancionesWhereInput | sancionesWhereInput[]
    grado?: IntFilter<"sanciones"> | number
    id_sanciones?: IntFilter<"sanciones"> | number
    comentario?: StringFilter<"sanciones"> | string
    estado_sancion?: StringFilter<"sanciones"> | string
    id_usuario?: IntFilter<"sanciones"> | number
    rut?: StringFilter<"sanciones"> | string
    Usuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    Estudiante?: XOR<EstudianteNullableRelationFilter, estudianteWhereInput> | null
  }

  export type sancionesOrderByWithRelationInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    comentario?: SortOrder
    estado_sancion?: SortOrder
    id_usuario?: SortOrder
    rut?: SortOrder
    Usuario?: usuarioOrderByWithRelationInput
    Estudiante?: estudianteOrderByWithRelationInput
  }

  export type sancionesWhereUniqueInput = Prisma.AtLeast<{
    id_sanciones?: number
    AND?: sancionesWhereInput | sancionesWhereInput[]
    OR?: sancionesWhereInput[]
    NOT?: sancionesWhereInput | sancionesWhereInput[]
    grado?: IntFilter<"sanciones"> | number
    comentario?: StringFilter<"sanciones"> | string
    estado_sancion?: StringFilter<"sanciones"> | string
    id_usuario?: IntFilter<"sanciones"> | number
    rut?: StringFilter<"sanciones"> | string
    Usuario?: XOR<UsuarioNullableRelationFilter, usuarioWhereInput> | null
    Estudiante?: XOR<EstudianteNullableRelationFilter, estudianteWhereInput> | null
  }, "id_sanciones">

  export type sancionesOrderByWithAggregationInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    comentario?: SortOrder
    estado_sancion?: SortOrder
    id_usuario?: SortOrder
    rut?: SortOrder
    _count?: sancionesCountOrderByAggregateInput
    _avg?: sancionesAvgOrderByAggregateInput
    _max?: sancionesMaxOrderByAggregateInput
    _min?: sancionesMinOrderByAggregateInput
    _sum?: sancionesSumOrderByAggregateInput
  }

  export type sancionesScalarWhereWithAggregatesInput = {
    AND?: sancionesScalarWhereWithAggregatesInput | sancionesScalarWhereWithAggregatesInput[]
    OR?: sancionesScalarWhereWithAggregatesInput[]
    NOT?: sancionesScalarWhereWithAggregatesInput | sancionesScalarWhereWithAggregatesInput[]
    grado?: IntWithAggregatesFilter<"sanciones"> | number
    id_sanciones?: IntWithAggregatesFilter<"sanciones"> | number
    comentario?: StringWithAggregatesFilter<"sanciones"> | string
    estado_sancion?: StringWithAggregatesFilter<"sanciones"> | string
    id_usuario?: IntWithAggregatesFilter<"sanciones"> | number
    rut?: StringWithAggregatesFilter<"sanciones"> | string
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    nombre_categoria?: StringFilter<"categoria"> | string
    fecha_creacion?: StringNullableFilter<"categoria"> | string | null
    recurso?: RecursoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    recurso?: recursoOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    nombre_categoria?: string
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    fecha_creacion?: StringNullableFilter<"categoria"> | string | null
    recurso?: RecursoListRelationFilter
  }, "id_categoria" | "nombre_categoria">

  export type categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categoria"> | number
    nombre_categoria?: StringWithAggregatesFilter<"categoria"> | string
    fecha_creacion?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type estudianteWhereInput = {
    AND?: estudianteWhereInput | estudianteWhereInput[]
    OR?: estudianteWhereInput[]
    NOT?: estudianteWhereInput | estudianteWhereInput[]
    nombre?: StringFilter<"estudiante"> | string
    rut?: StringFilter<"estudiante"> | string
    correo?: StringNullableFilter<"estudiante"> | string | null
    direccion?: StringNullableFilter<"estudiante"> | string | null
    fono?: StringNullableFilter<"estudiante"> | string | null
    ingreso?: IntNullableFilter<"estudiante"> | number | null
    estado_estudiante?: StringNullableFilter<"estudiante"> | string | null
    regular?: RegularListRelationFilter
    sanciones?: SancionesListRelationFilter
  }

  export type estudianteOrderByWithRelationInput = {
    nombre?: SortOrder
    rut?: SortOrder
    correo?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    fono?: SortOrderInput | SortOrder
    ingreso?: SortOrderInput | SortOrder
    estado_estudiante?: SortOrderInput | SortOrder
    regular?: regularOrderByRelationAggregateInput
    sanciones?: sancionesOrderByRelationAggregateInput
  }

  export type estudianteWhereUniqueInput = Prisma.AtLeast<{
    rut?: string
    AND?: estudianteWhereInput | estudianteWhereInput[]
    OR?: estudianteWhereInput[]
    NOT?: estudianteWhereInput | estudianteWhereInput[]
    nombre?: StringFilter<"estudiante"> | string
    correo?: StringNullableFilter<"estudiante"> | string | null
    direccion?: StringNullableFilter<"estudiante"> | string | null
    fono?: StringNullableFilter<"estudiante"> | string | null
    ingreso?: IntNullableFilter<"estudiante"> | number | null
    estado_estudiante?: StringNullableFilter<"estudiante"> | string | null
    regular?: RegularListRelationFilter
    sanciones?: SancionesListRelationFilter
  }, "rut">

  export type estudianteOrderByWithAggregationInput = {
    nombre?: SortOrder
    rut?: SortOrder
    correo?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    fono?: SortOrderInput | SortOrder
    ingreso?: SortOrderInput | SortOrder
    estado_estudiante?: SortOrderInput | SortOrder
    _count?: estudianteCountOrderByAggregateInput
    _avg?: estudianteAvgOrderByAggregateInput
    _max?: estudianteMaxOrderByAggregateInput
    _min?: estudianteMinOrderByAggregateInput
    _sum?: estudianteSumOrderByAggregateInput
  }

  export type estudianteScalarWhereWithAggregatesInput = {
    AND?: estudianteScalarWhereWithAggregatesInput | estudianteScalarWhereWithAggregatesInput[]
    OR?: estudianteScalarWhereWithAggregatesInput[]
    NOT?: estudianteScalarWhereWithAggregatesInput | estudianteScalarWhereWithAggregatesInput[]
    nombre?: StringWithAggregatesFilter<"estudiante"> | string
    rut?: StringWithAggregatesFilter<"estudiante"> | string
    correo?: StringNullableWithAggregatesFilter<"estudiante"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"estudiante"> | string | null
    fono?: StringNullableWithAggregatesFilter<"estudiante"> | string | null
    ingreso?: IntNullableWithAggregatesFilter<"estudiante"> | number | null
    estado_estudiante?: StringNullableWithAggregatesFilter<"estudiante"> | string | null
  }

  export type recursoWhereInput = {
    AND?: recursoWhereInput | recursoWhereInput[]
    OR?: recursoWhereInput[]
    NOT?: recursoWhereInput | recursoWhereInput[]
    nombre?: StringFilter<"recurso"> | string
    marca?: StringNullableFilter<"recurso"> | string | null
    descripcion?: StringNullableFilter<"recurso"> | string | null
    fecha_ingreso?: DateTimeNullableFilter<"recurso"> | Date | string | null
    modelo?: StringNullableFilter<"recurso"> | string | null
    estado_recurso?: BoolFilter<"recurso"> | boolean
    id_categoria?: IntNullableFilter<"recurso"> | number | null
    id_dici?: StringFilter<"recurso"> | string
    id_uta?: StringNullableFilter<"recurso"> | string | null
    ubicacion?: StringNullableFilter<"recurso"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    prestamo?: PrestamoListRelationFilter
  }

  export type recursoOrderByWithRelationInput = {
    nombre?: SortOrder
    marca?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    estado_recurso?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_dici?: SortOrder
    id_uta?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    prestamo?: prestamoOrderByRelationAggregateInput
  }

  export type recursoWhereUniqueInput = Prisma.AtLeast<{
    id_dici?: string
    AND?: recursoWhereInput | recursoWhereInput[]
    OR?: recursoWhereInput[]
    NOT?: recursoWhereInput | recursoWhereInput[]
    nombre?: StringFilter<"recurso"> | string
    marca?: StringNullableFilter<"recurso"> | string | null
    descripcion?: StringNullableFilter<"recurso"> | string | null
    fecha_ingreso?: DateTimeNullableFilter<"recurso"> | Date | string | null
    modelo?: StringNullableFilter<"recurso"> | string | null
    estado_recurso?: BoolFilter<"recurso"> | boolean
    id_categoria?: IntNullableFilter<"recurso"> | number | null
    id_uta?: StringNullableFilter<"recurso"> | string | null
    ubicacion?: StringNullableFilter<"recurso"> | string | null
    categoria?: XOR<CategoriaNullableRelationFilter, categoriaWhereInput> | null
    prestamo?: PrestamoListRelationFilter
  }, "id_dici">

  export type recursoOrderByWithAggregationInput = {
    nombre?: SortOrder
    marca?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    estado_recurso?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_dici?: SortOrder
    id_uta?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    _count?: recursoCountOrderByAggregateInput
    _avg?: recursoAvgOrderByAggregateInput
    _max?: recursoMaxOrderByAggregateInput
    _min?: recursoMinOrderByAggregateInput
    _sum?: recursoSumOrderByAggregateInput
  }

  export type recursoScalarWhereWithAggregatesInput = {
    AND?: recursoScalarWhereWithAggregatesInput | recursoScalarWhereWithAggregatesInput[]
    OR?: recursoScalarWhereWithAggregatesInput[]
    NOT?: recursoScalarWhereWithAggregatesInput | recursoScalarWhereWithAggregatesInput[]
    nombre?: StringWithAggregatesFilter<"recurso"> | string
    marca?: StringNullableWithAggregatesFilter<"recurso"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"recurso"> | string | null
    fecha_ingreso?: DateTimeNullableWithAggregatesFilter<"recurso"> | Date | string | null
    modelo?: StringNullableWithAggregatesFilter<"recurso"> | string | null
    estado_recurso?: BoolWithAggregatesFilter<"recurso"> | boolean
    id_categoria?: IntNullableWithAggregatesFilter<"recurso"> | number | null
    id_dici?: StringWithAggregatesFilter<"recurso"> | string
    id_uta?: StringNullableWithAggregatesFilter<"recurso"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"recurso"> | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    correo?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    rut?: StringFilter<"usuario"> | string
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
    ayudante?: XOR<AyudanteNullableRelationFilter, ayudanteWhereInput> | null
    sanciones?: SancionesListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rut?: SortOrder
    admin?: adminOrderByWithRelationInput
    ayudante?: ayudanteOrderByWithRelationInput
    sanciones?: sancionesOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    correo?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    rut?: StringFilter<"usuario"> | string
    admin?: XOR<AdminNullableRelationFilter, adminWhereInput> | null
    ayudante?: XOR<AyudanteNullableRelationFilter, ayudanteWhereInput> | null
    sanciones?: SancionesListRelationFilter
  }, "id_usuario">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rut?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    usuario?: StringWithAggregatesFilter<"usuario"> | string
    correo?: StringWithAggregatesFilter<"usuario"> | string
    password?: StringWithAggregatesFilter<"usuario"> | string
    rut?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type adminCreateInput = {
    Usuario: usuarioCreateNestedOneWithoutAdminInput
    especial?: especialCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id_usuario: number
    especial?: especialUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    Usuario?: usuarioUpdateOneRequiredWithoutAdminNestedInput
    especial?: especialUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    especial?: especialUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id_usuario: number
  }

  export type adminUpdateManyMutationInput = {

  }

  export type adminUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type ayudanteCreateInput = {
    Usuario: usuarioCreateNestedOneWithoutAyudanteInput
    regular?: regularCreateNestedManyWithoutAyudanteInput
  }

  export type ayudanteUncheckedCreateInput = {
    id_usuario: number
    regular?: regularUncheckedCreateNestedManyWithoutAyudanteInput
  }

  export type ayudanteUpdateInput = {
    Usuario?: usuarioUpdateOneRequiredWithoutAyudanteNestedInput
    regular?: regularUpdateManyWithoutAyudanteNestedInput
  }

  export type ayudanteUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    regular?: regularUncheckedUpdateManyWithoutAyudanteNestedInput
  }

  export type ayudanteCreateManyInput = {
    id_usuario: number
  }

  export type ayudanteUpdateManyMutationInput = {

  }

  export type ayudanteUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type especialCreateInput = {
    descripcion: string
    motivo: string
    prestamo: prestamoCreateNestedOneWithoutEspecialInput
    admin?: adminCreateNestedOneWithoutEspecialInput
  }

  export type especialUncheckedCreateInput = {
    descripcion: string
    motivo: string
    id_prestamo: number
    id_usuario?: number | null
  }

  export type especialUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    prestamo?: prestamoUpdateOneRequiredWithoutEspecialNestedInput
    admin?: adminUpdateOneWithoutEspecialNestedInput
  }

  export type especialUncheckedUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type especialCreateManyInput = {
    descripcion: string
    motivo: string
    id_prestamo: number
    id_usuario?: number | null
  }

  export type especialUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type especialUncheckedUpdateManyInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type prestamoCreateInput = {
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    especial?: especialCreateNestedOneWithoutPrestamoInput
    recursos?: recursoCreateNestedOneWithoutPrestamoInput
    regular?: regularCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_dici: string
    especial?: especialUncheckedCreateNestedOneWithoutPrestamoInput
    regular?: regularUncheckedCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUpdateInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    especial?: especialUpdateOneWithoutPrestamoNestedInput
    recursos?: recursoUpdateOneWithoutPrestamoNestedInput
    regular?: regularUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_dici?: StringFieldUpdateOperationsInput | string
    especial?: especialUncheckedUpdateOneWithoutPrestamoNestedInput
    regular?: regularUncheckedUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoCreateManyInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_dici: string
  }

  export type prestamoUpdateManyMutationInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type prestamoUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_dici?: StringFieldUpdateOperationsInput | string
  }

  export type regularCreateInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    prestamo: prestamoCreateNestedOneWithoutRegularInput
    Estudiante?: estudianteCreateNestedOneWithoutRegularInput
    ayudante?: ayudanteCreateNestedOneWithoutRegularInput
  }

  export type regularUncheckedCreateInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    rut: string
    id_usuario: number
  }

  export type regularUpdateInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prestamo?: prestamoUpdateOneRequiredWithoutRegularNestedInput
    Estudiante?: estudianteUpdateOneWithoutRegularNestedInput
    ayudante?: ayudanteUpdateOneWithoutRegularNestedInput
  }

  export type regularUncheckedUpdateInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type regularCreateManyInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    rut: string
    id_usuario: number
  }

  export type regularUpdateManyMutationInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type regularUncheckedUpdateManyInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type sancionesCreateInput = {
    grado: number
    comentario: string
    estado_sancion: string
    Usuario?: usuarioCreateNestedOneWithoutSancionesInput
    Estudiante?: estudianteCreateNestedOneWithoutSancionesInput
  }

  export type sancionesUncheckedCreateInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    id_usuario: number
    rut: string
  }

  export type sancionesUpdateInput = {
    grado?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    Usuario?: usuarioUpdateOneWithoutSancionesNestedInput
    Estudiante?: estudianteUpdateOneWithoutSancionesNestedInput
  }

  export type sancionesUncheckedUpdateInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type sancionesCreateManyInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    id_usuario: number
    rut: string
  }

  export type sancionesUpdateManyMutationInput = {
    grado?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
  }

  export type sancionesUncheckedUpdateManyInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaCreateInput = {
    nombre_categoria: string
    fecha_creacion?: string | null
    recurso?: recursoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre_categoria: string
    fecha_creacion?: string | null
    recurso?: recursoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: recursoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
    recurso?: recursoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id_categoria?: number
    nombre_categoria: string
    fecha_creacion?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estudianteCreateInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    regular?: regularCreateNestedManyWithoutEstudianteInput
    sanciones?: sancionesCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteUncheckedCreateInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    regular?: regularUncheckedCreateNestedManyWithoutEstudianteInput
    sanciones?: sancionesUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    regular?: regularUpdateManyWithoutEstudianteNestedInput
    sanciones?: sancionesUpdateManyWithoutEstudianteNestedInput
  }

  export type estudianteUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    regular?: regularUncheckedUpdateManyWithoutEstudianteNestedInput
    sanciones?: sancionesUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type estudianteCreateManyInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
  }

  export type estudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estudianteUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recursoCreateInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
    categoria?: categoriaCreateNestedOneWithoutRecursoInput
    prestamo?: prestamoCreateNestedManyWithoutRecursosInput
  }

  export type recursoUncheckedCreateInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_categoria?: number | null
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
    prestamo?: prestamoUncheckedCreateNestedManyWithoutRecursosInput
  }

  export type recursoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutRecursoNestedInput
    prestamo?: prestamoUpdateManyWithoutRecursosNestedInput
  }

  export type recursoUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    prestamo?: prestamoUncheckedUpdateManyWithoutRecursosNestedInput
  }

  export type recursoCreateManyInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_categoria?: number | null
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
  }

  export type recursoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recursoUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateInput = {
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminCreateNestedOneWithoutUsuarioInput
    ayudante?: ayudanteCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminUncheckedCreateNestedOneWithoutUsuarioInput
    ayudante?: ayudanteUncheckedCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUpdateOneWithoutUsuarioNestedInput
    ayudante?: ayudanteUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUncheckedUpdateOneWithoutUsuarioNestedInput
    ayudante?: ayudanteUncheckedUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type EspecialListRelationFilter = {
    every?: especialWhereInput
    some?: especialWhereInput
    none?: especialWhereInput
  }

  export type especialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RegularListRelationFilter = {
    every?: regularWhereInput
    some?: regularWhereInput
    none?: regularWhereInput
  }

  export type regularOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ayudanteCountOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type ayudanteAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type ayudanteMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type ayudanteMinOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type ayudanteSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PrestamoRelationFilter = {
    is?: prestamoWhereInput
    isNot?: prestamoWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: adminWhereInput | null
    isNot?: adminWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type especialCountOrderByAggregateInput = {
    descripcion?: SortOrder
    motivo?: SortOrder
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type especialAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type especialMaxOrderByAggregateInput = {
    descripcion?: SortOrder
    motivo?: SortOrder
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type especialMinOrderByAggregateInput = {
    descripcion?: SortOrder
    motivo?: SortOrder
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type especialSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EspecialNullableRelationFilter = {
    is?: especialWhereInput | null
    isNot?: especialWhereInput | null
  }

  export type RecursoNullableRelationFilter = {
    is?: recursoWhereInput | null
    isNot?: recursoWhereInput | null
  }

  export type RegularNullableRelationFilter = {
    is?: regularWhereInput | null
    isNot?: regularWhereInput | null
  }

  export type prestamoCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_dici?: SortOrder
  }

  export type prestamoAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
  }

  export type prestamoMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_dici?: SortOrder
  }

  export type prestamoMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_dici?: SortOrder
  }

  export type prestamoSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EstudianteNullableRelationFilter = {
    is?: estudianteWhereInput | null
    isNot?: estudianteWhereInput | null
  }

  export type AyudanteNullableRelationFilter = {
    is?: ayudanteWhereInput | null
    isNot?: ayudanteWhereInput | null
  }

  export type regularCountOrderByAggregateInput = {
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    id_prestamo?: SortOrder
    rut?: SortOrder
    id_usuario?: SortOrder
  }

  export type regularAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type regularMaxOrderByAggregateInput = {
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    id_prestamo?: SortOrder
    rut?: SortOrder
    id_usuario?: SortOrder
  }

  export type regularMinOrderByAggregateInput = {
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
    id_prestamo?: SortOrder
    rut?: SortOrder
    id_usuario?: SortOrder
  }

  export type regularSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type UsuarioNullableRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type sancionesCountOrderByAggregateInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    comentario?: SortOrder
    estado_sancion?: SortOrder
    id_usuario?: SortOrder
    rut?: SortOrder
  }

  export type sancionesAvgOrderByAggregateInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    id_usuario?: SortOrder
  }

  export type sancionesMaxOrderByAggregateInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    comentario?: SortOrder
    estado_sancion?: SortOrder
    id_usuario?: SortOrder
    rut?: SortOrder
  }

  export type sancionesMinOrderByAggregateInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    comentario?: SortOrder
    estado_sancion?: SortOrder
    id_usuario?: SortOrder
    rut?: SortOrder
  }

  export type sancionesSumOrderByAggregateInput = {
    grado?: SortOrder
    id_sanciones?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RecursoListRelationFilter = {
    every?: recursoWhereInput
    some?: recursoWhereInput
    none?: recursoWhereInput
  }

  export type recursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SancionesListRelationFilter = {
    every?: sancionesWhereInput
    some?: sancionesWhereInput
    none?: sancionesWhereInput
  }

  export type sancionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estudianteCountOrderByAggregateInput = {
    nombre?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fono?: SortOrder
    ingreso?: SortOrder
    estado_estudiante?: SortOrder
  }

  export type estudianteAvgOrderByAggregateInput = {
    ingreso?: SortOrder
  }

  export type estudianteMaxOrderByAggregateInput = {
    nombre?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fono?: SortOrder
    ingreso?: SortOrder
    estado_estudiante?: SortOrder
  }

  export type estudianteMinOrderByAggregateInput = {
    nombre?: SortOrder
    rut?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fono?: SortOrder
    ingreso?: SortOrder
    estado_estudiante?: SortOrder
  }

  export type estudianteSumOrderByAggregateInput = {
    ingreso?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriaNullableRelationFilter = {
    is?: categoriaWhereInput | null
    isNot?: categoriaWhereInput | null
  }

  export type PrestamoListRelationFilter = {
    every?: prestamoWhereInput
    some?: prestamoWhereInput
    none?: prestamoWhereInput
  }

  export type prestamoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recursoCountOrderByAggregateInput = {
    nombre?: SortOrder
    marca?: SortOrder
    descripcion?: SortOrder
    fecha_ingreso?: SortOrder
    modelo?: SortOrder
    estado_recurso?: SortOrder
    id_categoria?: SortOrder
    id_dici?: SortOrder
    id_uta?: SortOrder
    ubicacion?: SortOrder
  }

  export type recursoAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type recursoMaxOrderByAggregateInput = {
    nombre?: SortOrder
    marca?: SortOrder
    descripcion?: SortOrder
    fecha_ingreso?: SortOrder
    modelo?: SortOrder
    estado_recurso?: SortOrder
    id_categoria?: SortOrder
    id_dici?: SortOrder
    id_uta?: SortOrder
    ubicacion?: SortOrder
  }

  export type recursoMinOrderByAggregateInput = {
    nombre?: SortOrder
    marca?: SortOrder
    descripcion?: SortOrder
    fecha_ingreso?: SortOrder
    modelo?: SortOrder
    estado_recurso?: SortOrder
    id_categoria?: SortOrder
    id_dici?: SortOrder
    id_uta?: SortOrder
    ubicacion?: SortOrder
  }

  export type recursoSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rut?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rut?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    rut?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioCreateNestedOneWithoutAdminInput = {
    create?: XOR<usuarioCreateWithoutAdminInput, usuarioUncheckedCreateWithoutAdminInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAdminInput
    connect?: usuarioWhereUniqueInput
  }

  export type especialCreateNestedManyWithoutAdminInput = {
    create?: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput> | especialCreateWithoutAdminInput[] | especialUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: especialCreateOrConnectWithoutAdminInput | especialCreateOrConnectWithoutAdminInput[]
    createMany?: especialCreateManyAdminInputEnvelope
    connect?: especialWhereUniqueInput | especialWhereUniqueInput[]
  }

  export type especialUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput> | especialCreateWithoutAdminInput[] | especialUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: especialCreateOrConnectWithoutAdminInput | especialCreateOrConnectWithoutAdminInput[]
    createMany?: especialCreateManyAdminInputEnvelope
    connect?: especialWhereUniqueInput | especialWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<usuarioCreateWithoutAdminInput, usuarioUncheckedCreateWithoutAdminInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAdminInput
    upsert?: usuarioUpsertWithoutAdminInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAdminInput, usuarioUpdateWithoutAdminInput>, usuarioUncheckedUpdateWithoutAdminInput>
  }

  export type especialUpdateManyWithoutAdminNestedInput = {
    create?: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput> | especialCreateWithoutAdminInput[] | especialUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: especialCreateOrConnectWithoutAdminInput | especialCreateOrConnectWithoutAdminInput[]
    upsert?: especialUpsertWithWhereUniqueWithoutAdminInput | especialUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: especialCreateManyAdminInputEnvelope
    set?: especialWhereUniqueInput | especialWhereUniqueInput[]
    disconnect?: especialWhereUniqueInput | especialWhereUniqueInput[]
    delete?: especialWhereUniqueInput | especialWhereUniqueInput[]
    connect?: especialWhereUniqueInput | especialWhereUniqueInput[]
    update?: especialUpdateWithWhereUniqueWithoutAdminInput | especialUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: especialUpdateManyWithWhereWithoutAdminInput | especialUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: especialScalarWhereInput | especialScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type especialUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput> | especialCreateWithoutAdminInput[] | especialUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: especialCreateOrConnectWithoutAdminInput | especialCreateOrConnectWithoutAdminInput[]
    upsert?: especialUpsertWithWhereUniqueWithoutAdminInput | especialUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: especialCreateManyAdminInputEnvelope
    set?: especialWhereUniqueInput | especialWhereUniqueInput[]
    disconnect?: especialWhereUniqueInput | especialWhereUniqueInput[]
    delete?: especialWhereUniqueInput | especialWhereUniqueInput[]
    connect?: especialWhereUniqueInput | especialWhereUniqueInput[]
    update?: especialUpdateWithWhereUniqueWithoutAdminInput | especialUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: especialUpdateManyWithWhereWithoutAdminInput | especialUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: especialScalarWhereInput | especialScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutAyudanteInput = {
    create?: XOR<usuarioCreateWithoutAyudanteInput, usuarioUncheckedCreateWithoutAyudanteInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAyudanteInput
    connect?: usuarioWhereUniqueInput
  }

  export type regularCreateNestedManyWithoutAyudanteInput = {
    create?: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput> | regularCreateWithoutAyudanteInput[] | regularUncheckedCreateWithoutAyudanteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutAyudanteInput | regularCreateOrConnectWithoutAyudanteInput[]
    createMany?: regularCreateManyAyudanteInputEnvelope
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
  }

  export type regularUncheckedCreateNestedManyWithoutAyudanteInput = {
    create?: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput> | regularCreateWithoutAyudanteInput[] | regularUncheckedCreateWithoutAyudanteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutAyudanteInput | regularCreateOrConnectWithoutAyudanteInput[]
    createMany?: regularCreateManyAyudanteInputEnvelope
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutAyudanteNestedInput = {
    create?: XOR<usuarioCreateWithoutAyudanteInput, usuarioUncheckedCreateWithoutAyudanteInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAyudanteInput
    upsert?: usuarioUpsertWithoutAyudanteInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAyudanteInput, usuarioUpdateWithoutAyudanteInput>, usuarioUncheckedUpdateWithoutAyudanteInput>
  }

  export type regularUpdateManyWithoutAyudanteNestedInput = {
    create?: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput> | regularCreateWithoutAyudanteInput[] | regularUncheckedCreateWithoutAyudanteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutAyudanteInput | regularCreateOrConnectWithoutAyudanteInput[]
    upsert?: regularUpsertWithWhereUniqueWithoutAyudanteInput | regularUpsertWithWhereUniqueWithoutAyudanteInput[]
    createMany?: regularCreateManyAyudanteInputEnvelope
    set?: regularWhereUniqueInput | regularWhereUniqueInput[]
    disconnect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    delete?: regularWhereUniqueInput | regularWhereUniqueInput[]
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    update?: regularUpdateWithWhereUniqueWithoutAyudanteInput | regularUpdateWithWhereUniqueWithoutAyudanteInput[]
    updateMany?: regularUpdateManyWithWhereWithoutAyudanteInput | regularUpdateManyWithWhereWithoutAyudanteInput[]
    deleteMany?: regularScalarWhereInput | regularScalarWhereInput[]
  }

  export type regularUncheckedUpdateManyWithoutAyudanteNestedInput = {
    create?: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput> | regularCreateWithoutAyudanteInput[] | regularUncheckedCreateWithoutAyudanteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutAyudanteInput | regularCreateOrConnectWithoutAyudanteInput[]
    upsert?: regularUpsertWithWhereUniqueWithoutAyudanteInput | regularUpsertWithWhereUniqueWithoutAyudanteInput[]
    createMany?: regularCreateManyAyudanteInputEnvelope
    set?: regularWhereUniqueInput | regularWhereUniqueInput[]
    disconnect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    delete?: regularWhereUniqueInput | regularWhereUniqueInput[]
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    update?: regularUpdateWithWhereUniqueWithoutAyudanteInput | regularUpdateWithWhereUniqueWithoutAyudanteInput[]
    updateMany?: regularUpdateManyWithWhereWithoutAyudanteInput | regularUpdateManyWithWhereWithoutAyudanteInput[]
    deleteMany?: regularScalarWhereInput | regularScalarWhereInput[]
  }

  export type prestamoCreateNestedOneWithoutEspecialInput = {
    create?: XOR<prestamoCreateWithoutEspecialInput, prestamoUncheckedCreateWithoutEspecialInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutEspecialInput
    connect?: prestamoWhereUniqueInput
  }

  export type adminCreateNestedOneWithoutEspecialInput = {
    create?: XOR<adminCreateWithoutEspecialInput, adminUncheckedCreateWithoutEspecialInput>
    connectOrCreate?: adminCreateOrConnectWithoutEspecialInput
    connect?: adminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type prestamoUpdateOneRequiredWithoutEspecialNestedInput = {
    create?: XOR<prestamoCreateWithoutEspecialInput, prestamoUncheckedCreateWithoutEspecialInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutEspecialInput
    upsert?: prestamoUpsertWithoutEspecialInput
    connect?: prestamoWhereUniqueInput
    update?: XOR<XOR<prestamoUpdateToOneWithWhereWithoutEspecialInput, prestamoUpdateWithoutEspecialInput>, prestamoUncheckedUpdateWithoutEspecialInput>
  }

  export type adminUpdateOneWithoutEspecialNestedInput = {
    create?: XOR<adminCreateWithoutEspecialInput, adminUncheckedCreateWithoutEspecialInput>
    connectOrCreate?: adminCreateOrConnectWithoutEspecialInput
    upsert?: adminUpsertWithoutEspecialInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutEspecialInput, adminUpdateWithoutEspecialInput>, adminUncheckedUpdateWithoutEspecialInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type especialCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: especialCreateOrConnectWithoutPrestamoInput
    connect?: especialWhereUniqueInput
  }

  export type recursoCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<recursoCreateWithoutPrestamoInput, recursoUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: recursoCreateOrConnectWithoutPrestamoInput
    connect?: recursoWhereUniqueInput
  }

  export type regularCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: regularCreateOrConnectWithoutPrestamoInput
    connect?: regularWhereUniqueInput
  }

  export type especialUncheckedCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: especialCreateOrConnectWithoutPrestamoInput
    connect?: especialWhereUniqueInput
  }

  export type regularUncheckedCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: regularCreateOrConnectWithoutPrestamoInput
    connect?: regularWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type especialUpdateOneWithoutPrestamoNestedInput = {
    create?: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: especialCreateOrConnectWithoutPrestamoInput
    upsert?: especialUpsertWithoutPrestamoInput
    disconnect?: especialWhereInput | boolean
    delete?: especialWhereInput | boolean
    connect?: especialWhereUniqueInput
    update?: XOR<XOR<especialUpdateToOneWithWhereWithoutPrestamoInput, especialUpdateWithoutPrestamoInput>, especialUncheckedUpdateWithoutPrestamoInput>
  }

  export type recursoUpdateOneWithoutPrestamoNestedInput = {
    create?: XOR<recursoCreateWithoutPrestamoInput, recursoUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: recursoCreateOrConnectWithoutPrestamoInput
    upsert?: recursoUpsertWithoutPrestamoInput
    disconnect?: recursoWhereInput | boolean
    delete?: recursoWhereInput | boolean
    connect?: recursoWhereUniqueInput
    update?: XOR<XOR<recursoUpdateToOneWithWhereWithoutPrestamoInput, recursoUpdateWithoutPrestamoInput>, recursoUncheckedUpdateWithoutPrestamoInput>
  }

  export type regularUpdateOneWithoutPrestamoNestedInput = {
    create?: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: regularCreateOrConnectWithoutPrestamoInput
    upsert?: regularUpsertWithoutPrestamoInput
    disconnect?: regularWhereInput | boolean
    delete?: regularWhereInput | boolean
    connect?: regularWhereUniqueInput
    update?: XOR<XOR<regularUpdateToOneWithWhereWithoutPrestamoInput, regularUpdateWithoutPrestamoInput>, regularUncheckedUpdateWithoutPrestamoInput>
  }

  export type especialUncheckedUpdateOneWithoutPrestamoNestedInput = {
    create?: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: especialCreateOrConnectWithoutPrestamoInput
    upsert?: especialUpsertWithoutPrestamoInput
    disconnect?: especialWhereInput | boolean
    delete?: especialWhereInput | boolean
    connect?: especialWhereUniqueInput
    update?: XOR<XOR<especialUpdateToOneWithWhereWithoutPrestamoInput, especialUpdateWithoutPrestamoInput>, especialUncheckedUpdateWithoutPrestamoInput>
  }

  export type regularUncheckedUpdateOneWithoutPrestamoNestedInput = {
    create?: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: regularCreateOrConnectWithoutPrestamoInput
    upsert?: regularUpsertWithoutPrestamoInput
    disconnect?: regularWhereInput | boolean
    delete?: regularWhereInput | boolean
    connect?: regularWhereUniqueInput
    update?: XOR<XOR<regularUpdateToOneWithWhereWithoutPrestamoInput, regularUpdateWithoutPrestamoInput>, regularUncheckedUpdateWithoutPrestamoInput>
  }

  export type prestamoCreateNestedOneWithoutRegularInput = {
    create?: XOR<prestamoCreateWithoutRegularInput, prestamoUncheckedCreateWithoutRegularInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutRegularInput
    connect?: prestamoWhereUniqueInput
  }

  export type estudianteCreateNestedOneWithoutRegularInput = {
    create?: XOR<estudianteCreateWithoutRegularInput, estudianteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: estudianteCreateOrConnectWithoutRegularInput
    connect?: estudianteWhereUniqueInput
  }

  export type ayudanteCreateNestedOneWithoutRegularInput = {
    create?: XOR<ayudanteCreateWithoutRegularInput, ayudanteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutRegularInput
    connect?: ayudanteWhereUniqueInput
  }

  export type prestamoUpdateOneRequiredWithoutRegularNestedInput = {
    create?: XOR<prestamoCreateWithoutRegularInput, prestamoUncheckedCreateWithoutRegularInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutRegularInput
    upsert?: prestamoUpsertWithoutRegularInput
    connect?: prestamoWhereUniqueInput
    update?: XOR<XOR<prestamoUpdateToOneWithWhereWithoutRegularInput, prestamoUpdateWithoutRegularInput>, prestamoUncheckedUpdateWithoutRegularInput>
  }

  export type estudianteUpdateOneWithoutRegularNestedInput = {
    create?: XOR<estudianteCreateWithoutRegularInput, estudianteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: estudianteCreateOrConnectWithoutRegularInput
    upsert?: estudianteUpsertWithoutRegularInput
    disconnect?: estudianteWhereInput | boolean
    delete?: estudianteWhereInput | boolean
    connect?: estudianteWhereUniqueInput
    update?: XOR<XOR<estudianteUpdateToOneWithWhereWithoutRegularInput, estudianteUpdateWithoutRegularInput>, estudianteUncheckedUpdateWithoutRegularInput>
  }

  export type ayudanteUpdateOneWithoutRegularNestedInput = {
    create?: XOR<ayudanteCreateWithoutRegularInput, ayudanteUncheckedCreateWithoutRegularInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutRegularInput
    upsert?: ayudanteUpsertWithoutRegularInput
    disconnect?: ayudanteWhereInput | boolean
    delete?: ayudanteWhereInput | boolean
    connect?: ayudanteWhereUniqueInput
    update?: XOR<XOR<ayudanteUpdateToOneWithWhereWithoutRegularInput, ayudanteUpdateWithoutRegularInput>, ayudanteUncheckedUpdateWithoutRegularInput>
  }

  export type usuarioCreateNestedOneWithoutSancionesInput = {
    create?: XOR<usuarioCreateWithoutSancionesInput, usuarioUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSancionesInput
    connect?: usuarioWhereUniqueInput
  }

  export type estudianteCreateNestedOneWithoutSancionesInput = {
    create?: XOR<estudianteCreateWithoutSancionesInput, estudianteUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: estudianteCreateOrConnectWithoutSancionesInput
    connect?: estudianteWhereUniqueInput
  }

  export type usuarioUpdateOneWithoutSancionesNestedInput = {
    create?: XOR<usuarioCreateWithoutSancionesInput, usuarioUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSancionesInput
    upsert?: usuarioUpsertWithoutSancionesInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSancionesInput, usuarioUpdateWithoutSancionesInput>, usuarioUncheckedUpdateWithoutSancionesInput>
  }

  export type estudianteUpdateOneWithoutSancionesNestedInput = {
    create?: XOR<estudianteCreateWithoutSancionesInput, estudianteUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: estudianteCreateOrConnectWithoutSancionesInput
    upsert?: estudianteUpsertWithoutSancionesInput
    disconnect?: estudianteWhereInput | boolean
    delete?: estudianteWhereInput | boolean
    connect?: estudianteWhereUniqueInput
    update?: XOR<XOR<estudianteUpdateToOneWithWhereWithoutSancionesInput, estudianteUpdateWithoutSancionesInput>, estudianteUncheckedUpdateWithoutSancionesInput>
  }

  export type recursoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput> | recursoCreateWithoutCategoriaInput[] | recursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutCategoriaInput | recursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: recursoCreateManyCategoriaInputEnvelope
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
  }

  export type recursoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput> | recursoCreateWithoutCategoriaInput[] | recursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutCategoriaInput | recursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: recursoCreateManyCategoriaInputEnvelope
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type recursoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput> | recursoCreateWithoutCategoriaInput[] | recursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutCategoriaInput | recursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: recursoUpsertWithWhereUniqueWithoutCategoriaInput | recursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: recursoCreateManyCategoriaInputEnvelope
    set?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    disconnect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    delete?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    update?: recursoUpdateWithWhereUniqueWithoutCategoriaInput | recursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: recursoUpdateManyWithWhereWithoutCategoriaInput | recursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: recursoScalarWhereInput | recursoScalarWhereInput[]
  }

  export type recursoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput> | recursoCreateWithoutCategoriaInput[] | recursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutCategoriaInput | recursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: recursoUpsertWithWhereUniqueWithoutCategoriaInput | recursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: recursoCreateManyCategoriaInputEnvelope
    set?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    disconnect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    delete?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    update?: recursoUpdateWithWhereUniqueWithoutCategoriaInput | recursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: recursoUpdateManyWithWhereWithoutCategoriaInput | recursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: recursoScalarWhereInput | recursoScalarWhereInput[]
  }

  export type regularCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput> | regularCreateWithoutEstudianteInput[] | regularUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutEstudianteInput | regularCreateOrConnectWithoutEstudianteInput[]
    createMany?: regularCreateManyEstudianteInputEnvelope
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
  }

  export type sancionesCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput> | sancionesCreateWithoutEstudianteInput[] | sancionesUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutEstudianteInput | sancionesCreateOrConnectWithoutEstudianteInput[]
    createMany?: sancionesCreateManyEstudianteInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type regularUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput> | regularCreateWithoutEstudianteInput[] | regularUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutEstudianteInput | regularCreateOrConnectWithoutEstudianteInput[]
    createMany?: regularCreateManyEstudianteInputEnvelope
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
  }

  export type sancionesUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput> | sancionesCreateWithoutEstudianteInput[] | sancionesUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutEstudianteInput | sancionesCreateOrConnectWithoutEstudianteInput[]
    createMany?: sancionesCreateManyEstudianteInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type regularUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput> | regularCreateWithoutEstudianteInput[] | regularUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutEstudianteInput | regularCreateOrConnectWithoutEstudianteInput[]
    upsert?: regularUpsertWithWhereUniqueWithoutEstudianteInput | regularUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: regularCreateManyEstudianteInputEnvelope
    set?: regularWhereUniqueInput | regularWhereUniqueInput[]
    disconnect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    delete?: regularWhereUniqueInput | regularWhereUniqueInput[]
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    update?: regularUpdateWithWhereUniqueWithoutEstudianteInput | regularUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: regularUpdateManyWithWhereWithoutEstudianteInput | regularUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: regularScalarWhereInput | regularScalarWhereInput[]
  }

  export type sancionesUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput> | sancionesCreateWithoutEstudianteInput[] | sancionesUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutEstudianteInput | sancionesCreateOrConnectWithoutEstudianteInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutEstudianteInput | sancionesUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: sancionesCreateManyEstudianteInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutEstudianteInput | sancionesUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutEstudianteInput | sancionesUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type regularUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput> | regularCreateWithoutEstudianteInput[] | regularUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: regularCreateOrConnectWithoutEstudianteInput | regularCreateOrConnectWithoutEstudianteInput[]
    upsert?: regularUpsertWithWhereUniqueWithoutEstudianteInput | regularUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: regularCreateManyEstudianteInputEnvelope
    set?: regularWhereUniqueInput | regularWhereUniqueInput[]
    disconnect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    delete?: regularWhereUniqueInput | regularWhereUniqueInput[]
    connect?: regularWhereUniqueInput | regularWhereUniqueInput[]
    update?: regularUpdateWithWhereUniqueWithoutEstudianteInput | regularUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: regularUpdateManyWithWhereWithoutEstudianteInput | regularUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: regularScalarWhereInput | regularScalarWhereInput[]
  }

  export type sancionesUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput> | sancionesCreateWithoutEstudianteInput[] | sancionesUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutEstudianteInput | sancionesCreateOrConnectWithoutEstudianteInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutEstudianteInput | sancionesUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: sancionesCreateManyEstudianteInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutEstudianteInput | sancionesUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutEstudianteInput | sancionesUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutRecursoInput = {
    create?: XOR<categoriaCreateWithoutRecursoInput, categoriaUncheckedCreateWithoutRecursoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutRecursoInput
    connect?: categoriaWhereUniqueInput
  }

  export type prestamoCreateNestedManyWithoutRecursosInput = {
    create?: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput> | prestamoCreateWithoutRecursosInput[] | prestamoUncheckedCreateWithoutRecursosInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutRecursosInput | prestamoCreateOrConnectWithoutRecursosInput[]
    createMany?: prestamoCreateManyRecursosInputEnvelope
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
  }

  export type prestamoUncheckedCreateNestedManyWithoutRecursosInput = {
    create?: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput> | prestamoCreateWithoutRecursosInput[] | prestamoUncheckedCreateWithoutRecursosInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutRecursosInput | prestamoCreateOrConnectWithoutRecursosInput[]
    createMany?: prestamoCreateManyRecursosInputEnvelope
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type categoriaUpdateOneWithoutRecursoNestedInput = {
    create?: XOR<categoriaCreateWithoutRecursoInput, categoriaUncheckedCreateWithoutRecursoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutRecursoInput
    upsert?: categoriaUpsertWithoutRecursoInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutRecursoInput, categoriaUpdateWithoutRecursoInput>, categoriaUncheckedUpdateWithoutRecursoInput>
  }

  export type prestamoUpdateManyWithoutRecursosNestedInput = {
    create?: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput> | prestamoCreateWithoutRecursosInput[] | prestamoUncheckedCreateWithoutRecursosInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutRecursosInput | prestamoCreateOrConnectWithoutRecursosInput[]
    upsert?: prestamoUpsertWithWhereUniqueWithoutRecursosInput | prestamoUpsertWithWhereUniqueWithoutRecursosInput[]
    createMany?: prestamoCreateManyRecursosInputEnvelope
    set?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    disconnect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    delete?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    update?: prestamoUpdateWithWhereUniqueWithoutRecursosInput | prestamoUpdateWithWhereUniqueWithoutRecursosInput[]
    updateMany?: prestamoUpdateManyWithWhereWithoutRecursosInput | prestamoUpdateManyWithWhereWithoutRecursosInput[]
    deleteMany?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
  }

  export type prestamoUncheckedUpdateManyWithoutRecursosNestedInput = {
    create?: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput> | prestamoCreateWithoutRecursosInput[] | prestamoUncheckedCreateWithoutRecursosInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutRecursosInput | prestamoCreateOrConnectWithoutRecursosInput[]
    upsert?: prestamoUpsertWithWhereUniqueWithoutRecursosInput | prestamoUpsertWithWhereUniqueWithoutRecursosInput[]
    createMany?: prestamoCreateManyRecursosInputEnvelope
    set?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    disconnect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    delete?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    update?: prestamoUpdateWithWhereUniqueWithoutRecursosInput | prestamoUpdateWithWhereUniqueWithoutRecursosInput[]
    updateMany?: prestamoUpdateManyWithWhereWithoutRecursosInput | prestamoUpdateManyWithWhereWithoutRecursosInput[]
    deleteMany?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: adminCreateOrConnectWithoutUsuarioInput
    connect?: adminWhereUniqueInput
  }

  export type ayudanteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutUsuarioInput
    connect?: ayudanteWhereUniqueInput
  }

  export type sancionesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput> | sancionesCreateWithoutUsuarioInput[] | sancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutUsuarioInput | sancionesCreateOrConnectWithoutUsuarioInput[]
    createMany?: sancionesCreateManyUsuarioInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type adminUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: adminCreateOrConnectWithoutUsuarioInput
    connect?: adminWhereUniqueInput
  }

  export type ayudanteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutUsuarioInput
    connect?: ayudanteWhereUniqueInput
  }

  export type sancionesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput> | sancionesCreateWithoutUsuarioInput[] | sancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutUsuarioInput | sancionesCreateOrConnectWithoutUsuarioInput[]
    createMany?: sancionesCreateManyUsuarioInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type adminUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: adminCreateOrConnectWithoutUsuarioInput
    upsert?: adminUpsertWithoutUsuarioInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutUsuarioInput, adminUpdateWithoutUsuarioInput>, adminUncheckedUpdateWithoutUsuarioInput>
  }

  export type ayudanteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutUsuarioInput
    upsert?: ayudanteUpsertWithoutUsuarioInput
    disconnect?: ayudanteWhereInput | boolean
    delete?: ayudanteWhereInput | boolean
    connect?: ayudanteWhereUniqueInput
    update?: XOR<XOR<ayudanteUpdateToOneWithWhereWithoutUsuarioInput, ayudanteUpdateWithoutUsuarioInput>, ayudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type sancionesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput> | sancionesCreateWithoutUsuarioInput[] | sancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutUsuarioInput | sancionesCreateOrConnectWithoutUsuarioInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutUsuarioInput | sancionesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: sancionesCreateManyUsuarioInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutUsuarioInput | sancionesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutUsuarioInput | sancionesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type adminUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: adminCreateOrConnectWithoutUsuarioInput
    upsert?: adminUpsertWithoutUsuarioInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutUsuarioInput, adminUpdateWithoutUsuarioInput>, adminUncheckedUpdateWithoutUsuarioInput>
  }

  export type ayudanteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ayudanteCreateOrConnectWithoutUsuarioInput
    upsert?: ayudanteUpsertWithoutUsuarioInput
    disconnect?: ayudanteWhereInput | boolean
    delete?: ayudanteWhereInput | boolean
    connect?: ayudanteWhereUniqueInput
    update?: XOR<XOR<ayudanteUpdateToOneWithWhereWithoutUsuarioInput, ayudanteUpdateWithoutUsuarioInput>, ayudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type sancionesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput> | sancionesCreateWithoutUsuarioInput[] | sancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutUsuarioInput | sancionesCreateOrConnectWithoutUsuarioInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutUsuarioInput | sancionesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: sancionesCreateManyUsuarioInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutUsuarioInput | sancionesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutUsuarioInput | sancionesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usuarioCreateWithoutAdminInput = {
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    ayudante?: ayudanteCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAdminInput = {
    id_usuario?: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    ayudante?: ayudanteUncheckedCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutAdminInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAdminInput, usuarioUncheckedCreateWithoutAdminInput>
  }

  export type especialCreateWithoutAdminInput = {
    descripcion: string
    motivo: string
    prestamo: prestamoCreateNestedOneWithoutEspecialInput
  }

  export type especialUncheckedCreateWithoutAdminInput = {
    descripcion: string
    motivo: string
    id_prestamo: number
  }

  export type especialCreateOrConnectWithoutAdminInput = {
    where: especialWhereUniqueInput
    create: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput>
  }

  export type especialCreateManyAdminInputEnvelope = {
    data: especialCreateManyAdminInput | especialCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutAdminInput = {
    update: XOR<usuarioUpdateWithoutAdminInput, usuarioUncheckedUpdateWithoutAdminInput>
    create: XOR<usuarioCreateWithoutAdminInput, usuarioUncheckedCreateWithoutAdminInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAdminInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAdminInput, usuarioUncheckedUpdateWithoutAdminInput>
  }

  export type usuarioUpdateWithoutAdminInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    ayudante?: ayudanteUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAdminInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    ayudante?: ayudanteUncheckedUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type especialUpsertWithWhereUniqueWithoutAdminInput = {
    where: especialWhereUniqueInput
    update: XOR<especialUpdateWithoutAdminInput, especialUncheckedUpdateWithoutAdminInput>
    create: XOR<especialCreateWithoutAdminInput, especialUncheckedCreateWithoutAdminInput>
  }

  export type especialUpdateWithWhereUniqueWithoutAdminInput = {
    where: especialWhereUniqueInput
    data: XOR<especialUpdateWithoutAdminInput, especialUncheckedUpdateWithoutAdminInput>
  }

  export type especialUpdateManyWithWhereWithoutAdminInput = {
    where: especialScalarWhereInput
    data: XOR<especialUpdateManyMutationInput, especialUncheckedUpdateManyWithoutAdminInput>
  }

  export type especialScalarWhereInput = {
    AND?: especialScalarWhereInput | especialScalarWhereInput[]
    OR?: especialScalarWhereInput[]
    NOT?: especialScalarWhereInput | especialScalarWhereInput[]
    descripcion?: StringFilter<"especial"> | string
    motivo?: StringFilter<"especial"> | string
    id_prestamo?: IntFilter<"especial"> | number
    id_usuario?: IntNullableFilter<"especial"> | number | null
  }

  export type usuarioCreateWithoutAyudanteInput = {
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAyudanteInput = {
    id_usuario?: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminUncheckedCreateNestedOneWithoutUsuarioInput
    sanciones?: sancionesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutAyudanteInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAyudanteInput, usuarioUncheckedCreateWithoutAyudanteInput>
  }

  export type regularCreateWithoutAyudanteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    prestamo: prestamoCreateNestedOneWithoutRegularInput
    Estudiante?: estudianteCreateNestedOneWithoutRegularInput
  }

  export type regularUncheckedCreateWithoutAyudanteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    rut: string
  }

  export type regularCreateOrConnectWithoutAyudanteInput = {
    where: regularWhereUniqueInput
    create: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput>
  }

  export type regularCreateManyAyudanteInputEnvelope = {
    data: regularCreateManyAyudanteInput | regularCreateManyAyudanteInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutAyudanteInput = {
    update: XOR<usuarioUpdateWithoutAyudanteInput, usuarioUncheckedUpdateWithoutAyudanteInput>
    create: XOR<usuarioCreateWithoutAyudanteInput, usuarioUncheckedCreateWithoutAyudanteInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAyudanteInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAyudanteInput, usuarioUncheckedUpdateWithoutAyudanteInput>
  }

  export type usuarioUpdateWithoutAyudanteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAyudanteInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUncheckedUpdateOneWithoutUsuarioNestedInput
    sanciones?: sancionesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type regularUpsertWithWhereUniqueWithoutAyudanteInput = {
    where: regularWhereUniqueInput
    update: XOR<regularUpdateWithoutAyudanteInput, regularUncheckedUpdateWithoutAyudanteInput>
    create: XOR<regularCreateWithoutAyudanteInput, regularUncheckedCreateWithoutAyudanteInput>
  }

  export type regularUpdateWithWhereUniqueWithoutAyudanteInput = {
    where: regularWhereUniqueInput
    data: XOR<regularUpdateWithoutAyudanteInput, regularUncheckedUpdateWithoutAyudanteInput>
  }

  export type regularUpdateManyWithWhereWithoutAyudanteInput = {
    where: regularScalarWhereInput
    data: XOR<regularUpdateManyMutationInput, regularUncheckedUpdateManyWithoutAyudanteInput>
  }

  export type regularScalarWhereInput = {
    AND?: regularScalarWhereInput | regularScalarWhereInput[]
    OR?: regularScalarWhereInput[]
    NOT?: regularScalarWhereInput | regularScalarWhereInput[]
    hora_inicio?: DateTimeFilter<"regular"> | Date | string
    hora_fin?: DateTimeNullableFilter<"regular"> | Date | string | null
    id_prestamo?: IntFilter<"regular"> | number
    rut?: StringFilter<"regular"> | string
    id_usuario?: IntFilter<"regular"> | number
  }

  export type prestamoCreateWithoutEspecialInput = {
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    recursos?: recursoCreateNestedOneWithoutPrestamoInput
    regular?: regularCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateWithoutEspecialInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_dici: string
    regular?: regularUncheckedCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoCreateOrConnectWithoutEspecialInput = {
    where: prestamoWhereUniqueInput
    create: XOR<prestamoCreateWithoutEspecialInput, prestamoUncheckedCreateWithoutEspecialInput>
  }

  export type adminCreateWithoutEspecialInput = {
    Usuario: usuarioCreateNestedOneWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutEspecialInput = {
    id_usuario: number
  }

  export type adminCreateOrConnectWithoutEspecialInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutEspecialInput, adminUncheckedCreateWithoutEspecialInput>
  }

  export type prestamoUpsertWithoutEspecialInput = {
    update: XOR<prestamoUpdateWithoutEspecialInput, prestamoUncheckedUpdateWithoutEspecialInput>
    create: XOR<prestamoCreateWithoutEspecialInput, prestamoUncheckedCreateWithoutEspecialInput>
    where?: prestamoWhereInput
  }

  export type prestamoUpdateToOneWithWhereWithoutEspecialInput = {
    where?: prestamoWhereInput
    data: XOR<prestamoUpdateWithoutEspecialInput, prestamoUncheckedUpdateWithoutEspecialInput>
  }

  export type prestamoUpdateWithoutEspecialInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recursos?: recursoUpdateOneWithoutPrestamoNestedInput
    regular?: regularUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateWithoutEspecialInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_dici?: StringFieldUpdateOperationsInput | string
    regular?: regularUncheckedUpdateOneWithoutPrestamoNestedInput
  }

  export type adminUpsertWithoutEspecialInput = {
    update: XOR<adminUpdateWithoutEspecialInput, adminUncheckedUpdateWithoutEspecialInput>
    create: XOR<adminCreateWithoutEspecialInput, adminUncheckedCreateWithoutEspecialInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutEspecialInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutEspecialInput, adminUncheckedUpdateWithoutEspecialInput>
  }

  export type adminUpdateWithoutEspecialInput = {
    Usuario?: usuarioUpdateOneRequiredWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutEspecialInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type especialCreateWithoutPrestamoInput = {
    descripcion: string
    motivo: string
    admin?: adminCreateNestedOneWithoutEspecialInput
  }

  export type especialUncheckedCreateWithoutPrestamoInput = {
    descripcion: string
    motivo: string
    id_usuario?: number | null
  }

  export type especialCreateOrConnectWithoutPrestamoInput = {
    where: especialWhereUniqueInput
    create: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
  }

  export type recursoCreateWithoutPrestamoInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
    categoria?: categoriaCreateNestedOneWithoutRecursoInput
  }

  export type recursoUncheckedCreateWithoutPrestamoInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_categoria?: number | null
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
  }

  export type recursoCreateOrConnectWithoutPrestamoInput = {
    where: recursoWhereUniqueInput
    create: XOR<recursoCreateWithoutPrestamoInput, recursoUncheckedCreateWithoutPrestamoInput>
  }

  export type regularCreateWithoutPrestamoInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    Estudiante?: estudianteCreateNestedOneWithoutRegularInput
    ayudante?: ayudanteCreateNestedOneWithoutRegularInput
  }

  export type regularUncheckedCreateWithoutPrestamoInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    rut: string
    id_usuario: number
  }

  export type regularCreateOrConnectWithoutPrestamoInput = {
    where: regularWhereUniqueInput
    create: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
  }

  export type especialUpsertWithoutPrestamoInput = {
    update: XOR<especialUpdateWithoutPrestamoInput, especialUncheckedUpdateWithoutPrestamoInput>
    create: XOR<especialCreateWithoutPrestamoInput, especialUncheckedCreateWithoutPrestamoInput>
    where?: especialWhereInput
  }

  export type especialUpdateToOneWithWhereWithoutPrestamoInput = {
    where?: especialWhereInput
    data: XOR<especialUpdateWithoutPrestamoInput, especialUncheckedUpdateWithoutPrestamoInput>
  }

  export type especialUpdateWithoutPrestamoInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    admin?: adminUpdateOneWithoutEspecialNestedInput
  }

  export type especialUncheckedUpdateWithoutPrestamoInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type recursoUpsertWithoutPrestamoInput = {
    update: XOR<recursoUpdateWithoutPrestamoInput, recursoUncheckedUpdateWithoutPrestamoInput>
    create: XOR<recursoCreateWithoutPrestamoInput, recursoUncheckedCreateWithoutPrestamoInput>
    where?: recursoWhereInput
  }

  export type recursoUpdateToOneWithWhereWithoutPrestamoInput = {
    where?: recursoWhereInput
    data: XOR<recursoUpdateWithoutPrestamoInput, recursoUncheckedUpdateWithoutPrestamoInput>
  }

  export type recursoUpdateWithoutPrestamoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: categoriaUpdateOneWithoutRecursoNestedInput
  }

  export type recursoUncheckedUpdateWithoutPrestamoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type regularUpsertWithoutPrestamoInput = {
    update: XOR<regularUpdateWithoutPrestamoInput, regularUncheckedUpdateWithoutPrestamoInput>
    create: XOR<regularCreateWithoutPrestamoInput, regularUncheckedCreateWithoutPrestamoInput>
    where?: regularWhereInput
  }

  export type regularUpdateToOneWithWhereWithoutPrestamoInput = {
    where?: regularWhereInput
    data: XOR<regularUpdateWithoutPrestamoInput, regularUncheckedUpdateWithoutPrestamoInput>
  }

  export type regularUpdateWithoutPrestamoInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estudiante?: estudianteUpdateOneWithoutRegularNestedInput
    ayudante?: ayudanteUpdateOneWithoutRegularNestedInput
  }

  export type regularUncheckedUpdateWithoutPrestamoInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rut?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type prestamoCreateWithoutRegularInput = {
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    especial?: especialCreateNestedOneWithoutPrestamoInput
    recursos?: recursoCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateWithoutRegularInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_dici: string
    especial?: especialUncheckedCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoCreateOrConnectWithoutRegularInput = {
    where: prestamoWhereUniqueInput
    create: XOR<prestamoCreateWithoutRegularInput, prestamoUncheckedCreateWithoutRegularInput>
  }

  export type estudianteCreateWithoutRegularInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    sanciones?: sancionesCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteUncheckedCreateWithoutRegularInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    sanciones?: sancionesUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteCreateOrConnectWithoutRegularInput = {
    where: estudianteWhereUniqueInput
    create: XOR<estudianteCreateWithoutRegularInput, estudianteUncheckedCreateWithoutRegularInput>
  }

  export type ayudanteCreateWithoutRegularInput = {
    Usuario: usuarioCreateNestedOneWithoutAyudanteInput
  }

  export type ayudanteUncheckedCreateWithoutRegularInput = {
    id_usuario: number
  }

  export type ayudanteCreateOrConnectWithoutRegularInput = {
    where: ayudanteWhereUniqueInput
    create: XOR<ayudanteCreateWithoutRegularInput, ayudanteUncheckedCreateWithoutRegularInput>
  }

  export type prestamoUpsertWithoutRegularInput = {
    update: XOR<prestamoUpdateWithoutRegularInput, prestamoUncheckedUpdateWithoutRegularInput>
    create: XOR<prestamoCreateWithoutRegularInput, prestamoUncheckedCreateWithoutRegularInput>
    where?: prestamoWhereInput
  }

  export type prestamoUpdateToOneWithWhereWithoutRegularInput = {
    where?: prestamoWhereInput
    data: XOR<prestamoUpdateWithoutRegularInput, prestamoUncheckedUpdateWithoutRegularInput>
  }

  export type prestamoUpdateWithoutRegularInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    especial?: especialUpdateOneWithoutPrestamoNestedInput
    recursos?: recursoUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateWithoutRegularInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_dici?: StringFieldUpdateOperationsInput | string
    especial?: especialUncheckedUpdateOneWithoutPrestamoNestedInput
  }

  export type estudianteUpsertWithoutRegularInput = {
    update: XOR<estudianteUpdateWithoutRegularInput, estudianteUncheckedUpdateWithoutRegularInput>
    create: XOR<estudianteCreateWithoutRegularInput, estudianteUncheckedCreateWithoutRegularInput>
    where?: estudianteWhereInput
  }

  export type estudianteUpdateToOneWithWhereWithoutRegularInput = {
    where?: estudianteWhereInput
    data: XOR<estudianteUpdateWithoutRegularInput, estudianteUncheckedUpdateWithoutRegularInput>
  }

  export type estudianteUpdateWithoutRegularInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    sanciones?: sancionesUpdateManyWithoutEstudianteNestedInput
  }

  export type estudianteUncheckedUpdateWithoutRegularInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    sanciones?: sancionesUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ayudanteUpsertWithoutRegularInput = {
    update: XOR<ayudanteUpdateWithoutRegularInput, ayudanteUncheckedUpdateWithoutRegularInput>
    create: XOR<ayudanteCreateWithoutRegularInput, ayudanteUncheckedCreateWithoutRegularInput>
    where?: ayudanteWhereInput
  }

  export type ayudanteUpdateToOneWithWhereWithoutRegularInput = {
    where?: ayudanteWhereInput
    data: XOR<ayudanteUpdateWithoutRegularInput, ayudanteUncheckedUpdateWithoutRegularInput>
  }

  export type ayudanteUpdateWithoutRegularInput = {
    Usuario?: usuarioUpdateOneRequiredWithoutAyudanteNestedInput
  }

  export type ayudanteUncheckedUpdateWithoutRegularInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateWithoutSancionesInput = {
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminCreateNestedOneWithoutUsuarioInput
    ayudante?: ayudanteCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutSancionesInput = {
    id_usuario?: number
    nombre: string
    usuario: string
    correo: string
    password: string
    rut: string
    admin?: adminUncheckedCreateNestedOneWithoutUsuarioInput
    ayudante?: ayudanteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutSancionesInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSancionesInput, usuarioUncheckedCreateWithoutSancionesInput>
  }

  export type estudianteCreateWithoutSancionesInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    regular?: regularCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteUncheckedCreateWithoutSancionesInput = {
    nombre: string
    rut: string
    correo?: string | null
    direccion?: string | null
    fono?: string | null
    ingreso?: number | null
    estado_estudiante?: string | null
    regular?: regularUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type estudianteCreateOrConnectWithoutSancionesInput = {
    where: estudianteWhereUniqueInput
    create: XOR<estudianteCreateWithoutSancionesInput, estudianteUncheckedCreateWithoutSancionesInput>
  }

  export type usuarioUpsertWithoutSancionesInput = {
    update: XOR<usuarioUpdateWithoutSancionesInput, usuarioUncheckedUpdateWithoutSancionesInput>
    create: XOR<usuarioCreateWithoutSancionesInput, usuarioUncheckedCreateWithoutSancionesInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSancionesInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSancionesInput, usuarioUncheckedUpdateWithoutSancionesInput>
  }

  export type usuarioUpdateWithoutSancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUpdateOneWithoutUsuarioNestedInput
    ayudante?: ayudanteUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSancionesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    admin?: adminUncheckedUpdateOneWithoutUsuarioNestedInput
    ayudante?: ayudanteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type estudianteUpsertWithoutSancionesInput = {
    update: XOR<estudianteUpdateWithoutSancionesInput, estudianteUncheckedUpdateWithoutSancionesInput>
    create: XOR<estudianteCreateWithoutSancionesInput, estudianteUncheckedCreateWithoutSancionesInput>
    where?: estudianteWhereInput
  }

  export type estudianteUpdateToOneWithWhereWithoutSancionesInput = {
    where?: estudianteWhereInput
    data: XOR<estudianteUpdateWithoutSancionesInput, estudianteUncheckedUpdateWithoutSancionesInput>
  }

  export type estudianteUpdateWithoutSancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    regular?: regularUpdateManyWithoutEstudianteNestedInput
  }

  export type estudianteUncheckedUpdateWithoutSancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    fono?: NullableStringFieldUpdateOperationsInput | string | null
    ingreso?: NullableIntFieldUpdateOperationsInput | number | null
    estado_estudiante?: NullableStringFieldUpdateOperationsInput | string | null
    regular?: regularUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type recursoCreateWithoutCategoriaInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
    prestamo?: prestamoCreateNestedManyWithoutRecursosInput
  }

  export type recursoUncheckedCreateWithoutCategoriaInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
    prestamo?: prestamoUncheckedCreateNestedManyWithoutRecursosInput
  }

  export type recursoCreateOrConnectWithoutCategoriaInput = {
    where: recursoWhereUniqueInput
    create: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput>
  }

  export type recursoCreateManyCategoriaInputEnvelope = {
    data: recursoCreateManyCategoriaInput | recursoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type recursoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: recursoWhereUniqueInput
    update: XOR<recursoUpdateWithoutCategoriaInput, recursoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<recursoCreateWithoutCategoriaInput, recursoUncheckedCreateWithoutCategoriaInput>
  }

  export type recursoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: recursoWhereUniqueInput
    data: XOR<recursoUpdateWithoutCategoriaInput, recursoUncheckedUpdateWithoutCategoriaInput>
  }

  export type recursoUpdateManyWithWhereWithoutCategoriaInput = {
    where: recursoScalarWhereInput
    data: XOR<recursoUpdateManyMutationInput, recursoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type recursoScalarWhereInput = {
    AND?: recursoScalarWhereInput | recursoScalarWhereInput[]
    OR?: recursoScalarWhereInput[]
    NOT?: recursoScalarWhereInput | recursoScalarWhereInput[]
    nombre?: StringFilter<"recurso"> | string
    marca?: StringNullableFilter<"recurso"> | string | null
    descripcion?: StringNullableFilter<"recurso"> | string | null
    fecha_ingreso?: DateTimeNullableFilter<"recurso"> | Date | string | null
    modelo?: StringNullableFilter<"recurso"> | string | null
    estado_recurso?: BoolFilter<"recurso"> | boolean
    id_categoria?: IntNullableFilter<"recurso"> | number | null
    id_dici?: StringFilter<"recurso"> | string
    id_uta?: StringNullableFilter<"recurso"> | string | null
    ubicacion?: StringNullableFilter<"recurso"> | string | null
  }

  export type regularCreateWithoutEstudianteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    prestamo: prestamoCreateNestedOneWithoutRegularInput
    ayudante?: ayudanteCreateNestedOneWithoutRegularInput
  }

  export type regularUncheckedCreateWithoutEstudianteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    id_usuario: number
  }

  export type regularCreateOrConnectWithoutEstudianteInput = {
    where: regularWhereUniqueInput
    create: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput>
  }

  export type regularCreateManyEstudianteInputEnvelope = {
    data: regularCreateManyEstudianteInput | regularCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type sancionesCreateWithoutEstudianteInput = {
    grado: number
    comentario: string
    estado_sancion: string
    Usuario?: usuarioCreateNestedOneWithoutSancionesInput
  }

  export type sancionesUncheckedCreateWithoutEstudianteInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    id_usuario: number
  }

  export type sancionesCreateOrConnectWithoutEstudianteInput = {
    where: sancionesWhereUniqueInput
    create: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput>
  }

  export type sancionesCreateManyEstudianteInputEnvelope = {
    data: sancionesCreateManyEstudianteInput | sancionesCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type regularUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: regularWhereUniqueInput
    update: XOR<regularUpdateWithoutEstudianteInput, regularUncheckedUpdateWithoutEstudianteInput>
    create: XOR<regularCreateWithoutEstudianteInput, regularUncheckedCreateWithoutEstudianteInput>
  }

  export type regularUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: regularWhereUniqueInput
    data: XOR<regularUpdateWithoutEstudianteInput, regularUncheckedUpdateWithoutEstudianteInput>
  }

  export type regularUpdateManyWithWhereWithoutEstudianteInput = {
    where: regularScalarWhereInput
    data: XOR<regularUpdateManyMutationInput, regularUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type sancionesUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: sancionesWhereUniqueInput
    update: XOR<sancionesUpdateWithoutEstudianteInput, sancionesUncheckedUpdateWithoutEstudianteInput>
    create: XOR<sancionesCreateWithoutEstudianteInput, sancionesUncheckedCreateWithoutEstudianteInput>
  }

  export type sancionesUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: sancionesWhereUniqueInput
    data: XOR<sancionesUpdateWithoutEstudianteInput, sancionesUncheckedUpdateWithoutEstudianteInput>
  }

  export type sancionesUpdateManyWithWhereWithoutEstudianteInput = {
    where: sancionesScalarWhereInput
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type sancionesScalarWhereInput = {
    AND?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
    OR?: sancionesScalarWhereInput[]
    NOT?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
    grado?: IntFilter<"sanciones"> | number
    id_sanciones?: IntFilter<"sanciones"> | number
    comentario?: StringFilter<"sanciones"> | string
    estado_sancion?: StringFilter<"sanciones"> | string
    id_usuario?: IntFilter<"sanciones"> | number
    rut?: StringFilter<"sanciones"> | string
  }

  export type categoriaCreateWithoutRecursoInput = {
    nombre_categoria: string
    fecha_creacion?: string | null
  }

  export type categoriaUncheckedCreateWithoutRecursoInput = {
    id_categoria?: number
    nombre_categoria: string
    fecha_creacion?: string | null
  }

  export type categoriaCreateOrConnectWithoutRecursoInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutRecursoInput, categoriaUncheckedCreateWithoutRecursoInput>
  }

  export type prestamoCreateWithoutRecursosInput = {
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    especial?: especialCreateNestedOneWithoutPrestamoInput
    regular?: regularCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateWithoutRecursosInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    especial?: especialUncheckedCreateNestedOneWithoutPrestamoInput
    regular?: regularUncheckedCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoCreateOrConnectWithoutRecursosInput = {
    where: prestamoWhereUniqueInput
    create: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput>
  }

  export type prestamoCreateManyRecursosInputEnvelope = {
    data: prestamoCreateManyRecursosInput | prestamoCreateManyRecursosInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutRecursoInput = {
    update: XOR<categoriaUpdateWithoutRecursoInput, categoriaUncheckedUpdateWithoutRecursoInput>
    create: XOR<categoriaCreateWithoutRecursoInput, categoriaUncheckedCreateWithoutRecursoInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutRecursoInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutRecursoInput, categoriaUncheckedUpdateWithoutRecursoInput>
  }

  export type categoriaUpdateWithoutRecursoInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateWithoutRecursoInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prestamoUpsertWithWhereUniqueWithoutRecursosInput = {
    where: prestamoWhereUniqueInput
    update: XOR<prestamoUpdateWithoutRecursosInput, prestamoUncheckedUpdateWithoutRecursosInput>
    create: XOR<prestamoCreateWithoutRecursosInput, prestamoUncheckedCreateWithoutRecursosInput>
  }

  export type prestamoUpdateWithWhereUniqueWithoutRecursosInput = {
    where: prestamoWhereUniqueInput
    data: XOR<prestamoUpdateWithoutRecursosInput, prestamoUncheckedUpdateWithoutRecursosInput>
  }

  export type prestamoUpdateManyWithWhereWithoutRecursosInput = {
    where: prestamoScalarWhereInput
    data: XOR<prestamoUpdateManyMutationInput, prestamoUncheckedUpdateManyWithoutRecursosInput>
  }

  export type prestamoScalarWhereInput = {
    AND?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
    OR?: prestamoScalarWhereInput[]
    NOT?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
    id_prestamo?: IntFilter<"prestamo"> | number
    fecha_inicio?: DateTimeFilter<"prestamo"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_dici?: StringFilter<"prestamo"> | string
  }

  export type adminCreateWithoutUsuarioInput = {
    especial?: especialCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutUsuarioInput = {
    especial?: especialUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutUsuarioInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
  }

  export type ayudanteCreateWithoutUsuarioInput = {
    regular?: regularCreateNestedManyWithoutAyudanteInput
  }

  export type ayudanteUncheckedCreateWithoutUsuarioInput = {
    regular?: regularUncheckedCreateNestedManyWithoutAyudanteInput
  }

  export type ayudanteCreateOrConnectWithoutUsuarioInput = {
    where: ayudanteWhereUniqueInput
    create: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
  }

  export type sancionesCreateWithoutUsuarioInput = {
    grado: number
    comentario: string
    estado_sancion: string
    Estudiante?: estudianteCreateNestedOneWithoutSancionesInput
  }

  export type sancionesUncheckedCreateWithoutUsuarioInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    rut: string
  }

  export type sancionesCreateOrConnectWithoutUsuarioInput = {
    where: sancionesWhereUniqueInput
    create: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput>
  }

  export type sancionesCreateManyUsuarioInputEnvelope = {
    data: sancionesCreateManyUsuarioInput | sancionesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type adminUpsertWithoutUsuarioInput = {
    update: XOR<adminUpdateWithoutUsuarioInput, adminUncheckedUpdateWithoutUsuarioInput>
    create: XOR<adminCreateWithoutUsuarioInput, adminUncheckedCreateWithoutUsuarioInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutUsuarioInput, adminUncheckedUpdateWithoutUsuarioInput>
  }

  export type adminUpdateWithoutUsuarioInput = {
    especial?: especialUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutUsuarioInput = {
    especial?: especialUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ayudanteUpsertWithoutUsuarioInput = {
    update: XOR<ayudanteUpdateWithoutUsuarioInput, ayudanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ayudanteCreateWithoutUsuarioInput, ayudanteUncheckedCreateWithoutUsuarioInput>
    where?: ayudanteWhereInput
  }

  export type ayudanteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ayudanteWhereInput
    data: XOR<ayudanteUpdateWithoutUsuarioInput, ayudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ayudanteUpdateWithoutUsuarioInput = {
    regular?: regularUpdateManyWithoutAyudanteNestedInput
  }

  export type ayudanteUncheckedUpdateWithoutUsuarioInput = {
    regular?: regularUncheckedUpdateManyWithoutAyudanteNestedInput
  }

  export type sancionesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: sancionesWhereUniqueInput
    update: XOR<sancionesUpdateWithoutUsuarioInput, sancionesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<sancionesCreateWithoutUsuarioInput, sancionesUncheckedCreateWithoutUsuarioInput>
  }

  export type sancionesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: sancionesWhereUniqueInput
    data: XOR<sancionesUpdateWithoutUsuarioInput, sancionesUncheckedUpdateWithoutUsuarioInput>
  }

  export type sancionesUpdateManyWithWhereWithoutUsuarioInput = {
    where: sancionesScalarWhereInput
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type especialCreateManyAdminInput = {
    descripcion: string
    motivo: string
    id_prestamo: number
  }

  export type especialUpdateWithoutAdminInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    prestamo?: prestamoUpdateOneRequiredWithoutEspecialNestedInput
  }

  export type especialUncheckedUpdateWithoutAdminInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    id_prestamo?: IntFieldUpdateOperationsInput | number
  }

  export type especialUncheckedUpdateManyWithoutAdminInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    motivo?: StringFieldUpdateOperationsInput | string
    id_prestamo?: IntFieldUpdateOperationsInput | number
  }

  export type regularCreateManyAyudanteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    rut: string
  }

  export type regularUpdateWithoutAyudanteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prestamo?: prestamoUpdateOneRequiredWithoutRegularNestedInput
    Estudiante?: estudianteUpdateOneWithoutRegularNestedInput
  }

  export type regularUncheckedUpdateWithoutAyudanteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type regularUncheckedUpdateManyWithoutAyudanteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type recursoCreateManyCategoriaInput = {
    nombre: string
    marca?: string | null
    descripcion?: string | null
    fecha_ingreso?: Date | string | null
    modelo?: string | null
    estado_recurso?: boolean
    id_dici: string
    id_uta?: string | null
    ubicacion?: string | null
  }

  export type recursoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    prestamo?: prestamoUpdateManyWithoutRecursosNestedInput
  }

  export type recursoUncheckedUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    prestamo?: prestamoUncheckedUpdateManyWithoutRecursosNestedInput
  }

  export type recursoUncheckedUpdateManyWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_recurso?: BoolFieldUpdateOperationsInput | boolean
    id_dici?: StringFieldUpdateOperationsInput | string
    id_uta?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type regularCreateManyEstudianteInput = {
    hora_inicio: Date | string
    hora_fin?: Date | string | null
    id_prestamo: number
    id_usuario: number
  }

  export type sancionesCreateManyEstudianteInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    id_usuario: number
  }

  export type regularUpdateWithoutEstudianteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prestamo?: prestamoUpdateOneRequiredWithoutRegularNestedInput
    ayudante?: ayudanteUpdateOneWithoutRegularNestedInput
  }

  export type regularUncheckedUpdateWithoutEstudianteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type regularUncheckedUpdateManyWithoutEstudianteInput = {
    hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type sancionesUpdateWithoutEstudianteInput = {
    grado?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    Usuario?: usuarioUpdateOneWithoutSancionesNestedInput
  }

  export type sancionesUncheckedUpdateWithoutEstudianteInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type sancionesUncheckedUpdateManyWithoutEstudianteInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type prestamoCreateManyRecursosInput = {
    id_prestamo?: number
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
  }

  export type prestamoUpdateWithoutRecursosInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    especial?: especialUpdateOneWithoutPrestamoNestedInput
    regular?: regularUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateWithoutRecursosInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    especial?: especialUncheckedUpdateOneWithoutPrestamoNestedInput
    regular?: regularUncheckedUpdateOneWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateManyWithoutRecursosInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesCreateManyUsuarioInput = {
    grado: number
    id_sanciones?: number
    comentario: string
    estado_sancion: string
    rut: string
  }

  export type sancionesUpdateWithoutUsuarioInput = {
    grado?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    Estudiante?: estudianteUpdateOneWithoutSancionesNestedInput
  }

  export type sancionesUncheckedUpdateWithoutUsuarioInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
  }

  export type sancionesUncheckedUpdateManyWithoutUsuarioInput = {
    grado?: IntFieldUpdateOperationsInput | number
    id_sanciones?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    estado_sancion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AyudanteCountOutputTypeDefaultArgs instead
     */
    export type AyudanteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AyudanteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstudianteCountOutputTypeDefaultArgs instead
     */
    export type EstudianteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstudianteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecursoCountOutputTypeDefaultArgs instead
     */
    export type RecursoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecursoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ayudanteDefaultArgs instead
     */
    export type ayudanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ayudanteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use especialDefaultArgs instead
     */
    export type especialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = especialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use prestamoDefaultArgs instead
     */
    export type prestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = prestamoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use regularDefaultArgs instead
     */
    export type regularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = regularDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sancionesDefaultArgs instead
     */
    export type sancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sancionesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriaDefaultArgs instead
     */
    export type categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use estudianteDefaultArgs instead
     */
    export type estudianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = estudianteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use recursoDefaultArgs instead
     */
    export type recursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = recursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}